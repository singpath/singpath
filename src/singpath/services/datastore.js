/**
 * Models for the singpath firebase db.
 */
'use strict';

const NOOP = () => undefined;

const DEFAULT_PYTHON_TEST = `>>> hello
"world"`;

const DEFAULT_JAVASCRIPT_TEST = `test("foo is defined", () => assert.ok(foo));
test("foo equals 1", () => assert.equal(1, foo))
test("timer is defined", () => assert.ok(timer));
test("timer is an async function", () => {
  const now = Date.now();

  return new Promise(resolve => timer(100, resolve)).then(
    () => assert.ok(Date.now() >= (now + 100))
  );
});
`;

const DEFAULT_JAVA_TEST = `'import org.junit.Test;
import static org.junit.Assert.*;
import junit.framework.*;
import com.singpath.SolutionRunner;

public class SingPathTest extends SolutionRunner {

    @Test
    public void testSomething() throws Exception {
        SingPath solution = new SingPath();
    }

}
`;

export function factory(
  $q, $http, $log, $firebaseObject, $firebaseArray,
  spfAuth, spfAuthData, spfFirebase
) {
  var spfDataStore;

  spfDataStore = {
    _profileFactory: spfFirebase.objFactory({
      $hasSolved: function(problem) {
        var solution = this.$solution(problem);
        return solution && solution.solved;
      },

      $hasStarted: function(problem) {
        var solution = this.$solution(problem);
        return solution && solution.startedAt;
      },

      $workingOn: function(problem) {
        var solution = this.$solution(problem);
        return solution && solution.startedAt && !solution.solved;
      },

      $solution: function(problem) {
        var queueId = 'default';

        return (
          problem &&
          this.queuedSolutions &&
          this.queuedSolutions[problem.$pathId] &&
          this.queuedSolutions[problem.$pathId][problem.$levelId] &&
          this.queuedSolutions[problem.$pathId][problem.$levelId][problem.$id] &&
          this.queuedSolutions[problem.$pathId][problem.$levelId][problem.$id][queueId]
        );
      }

    }),

    /**
     * Return a promise resolving to $firebaseObj pointing to
     * the current user profile for Singpath.
     *
     * If the user has a singpath profile and its user data are outdated.
     * they will get updated.
     *
     */
    currentUserProfile: function() {
      if (!spfAuth.user || !spfAuth.user.uid) {
        return $q.when();
      }

      var currentUserPromise = spfAuthData.user();
      var profilePromise = spfAuthData.user().then(function(currentUser) {
        if (!currentUser.publicId) {
          return;
        }
        return spfDataStore.profile(currentUser.publicId);
      });

      return $q.all({
        currentUser: currentUserPromise,
        profile: profilePromise
      }).then(function(resp) {
        var userData = resp.profile && resp.profile.user;

        if (!userData) {
          return resp.profile;
        }

        var userSchool = userData.school && userData.school.name;
        var profileSchool = resp.currentUser.school && resp.currentUser.school.name;
        var userCountry = userData.country && userData.country.code;
        var profileCountry = resp.currentUser.country && resp.currentUser.country.code;

        if (
          userData.displayName === resp.currentUser.displayName &&
          userData.gravatar === resp.currentUser.gravatar &&
          userCountry === profileCountry &&
          userData.yearOfBirth === resp.currentUser.yearOfBirth &&
          userSchool === profileSchool
        ) {
          return resp.profile;
        }

        return spfDataStore._initProfile(resp.currentUser);
      });
    },

    profile: function(publicId) {
      return $q.when(publicId).then(function(id) {
        return spfDataStore._profileFactory(['singpath/userProfiles', id]).$loaded();
      });
    },

    _initProfile: function(userData) {
      return spfFirebase.set(
        ['singpath/userProfiles', userData.publicId, 'user'], {
          displayName: userData.displayName,
          gravatar: userData.gravatar,
          // cleanup optional values
          country: spfFirebase.cleanObj(userData.country),
          yearOfBirth: spfFirebase.cleanObj(userData.yearOfBirth),
          school: spfFirebase.cleanObj(userData.school)
        }
      ).then(function() {
        return spfDataStore.profile(userData.publicId);
      });
    },

    initProfile: function() {
      return spfAuthData.user().then(function(currentUser) {
        if (!currentUser || !currentUser.publicId) {
          return $q.reject(new Error('The user has not set a user public id.'));
        }

        return spfDataStore._initProfile(currentUser);
      });
    },

    verifierStatus: function() {
      return $http.get('/api/verifier').then(function(resp) {
        return resp.data;
      });
    },

    paths: {
      _Factory: spfFirebase.objFactory({
        $canBeEditedBy: function(user) {
          return user && this.owner.publicId === user.publicId;
        }
      }),

      list: function() {
        return spfFirebase.loadedArray('singpath/paths', {
          orderByKey: undefined,
          limitToLast: 50
        });
      },

      create: function(path) {
        return spfFirebase.push(['singpath/paths'], path).then(function(ref) {
          return ref;
        });
      },

      get: function(pathId) {
        return spfDataStore.paths._Factory(['singpath/paths', pathId]).$loaded();
      }
    },

    levels: {
      _Factory: spfFirebase.objFactory({
        $canBeEditedBy: function(user) {
          return user && this.owner.publicId === user.publicId;
        },

        pathId: function() {
          return this.$ref().parent().key();
        }
      }),

      list: function(pathId) {
        return spfFirebase.loadedArray(['singpath/levels', pathId], {
          orderByKey: undefined,
          limitToLast: 50
        });
      },

      get: function(pathId, levelId) {
        return spfDataStore.levels._Factory(['singpath/levels', pathId, levelId]).$loaded();
      },

      create: function(pathId, level) {
        return spfFirebase.push(['singpath/levels', pathId], level).then(function(ref) {
          return ref;
        });
      }
    },

    problems: {
      errDeleteFailed: new Error('Failed to delete the problem and its solutions'),

      defaults: {
        python: DEFAULT_PYTHON_TEST,
        javascript: DEFAULT_JAVASCRIPT_TEST,
        java: DEFAULT_JAVA_TEST
      },

      _Factory: spfFirebase.objFactory({
        $canBeEditedBy: function(user) {
          return this.owner.publicId === user.publicId;
        },

        $remove: function() {
          var level = this.$ref().parent();
          var pathId = level.parent().key();
          var levelId = level.key();
          var problemId = this.$id;

          return $firebaseObject.prototype.$remove.apply(this).then(function() {
            return spfDataStore.solutions.listSolutions(pathId, levelId, problemId);
          }).then(function(publicIds) {
            var solutionsPath = ['queuedSolutions',pathId, levelId, problemId].join('/');
            var data = publicIds.reduce(function(data, id) {
              var profilePath = [
                'userProfiles', id,
                'queuedSolutions', pathId, levelId, problemId
              ].join('/');

              data[profilePath] = null;

              return data;
            }, {});

            data[solutionsPath] = null;

            return spfFirebase.patch(['singpath'], data);
          }).catch(function(err) {
            $log.error(err);
            return $q.reject('Failed to delete this problem.');
          });
        }
      }),

      _itemFactory: spfFirebase.arrayFactory({
        $$added: function(snap) {
          var problem = $firebaseArray.prototype.$$added.apply(this, arguments);
          problem.$levelId = snap.ref().parent().key();
          problem.$pathId = snap.ref().parent().parent().key();
          return problem;
        }
      }),

      list: function(pathId, levelId) {
        return spfDataStore.problems._itemFactory(
          ['singpath/problems', pathId, levelId]
        ).$loaded();
      },

      create: function(pathId, levelId, problem) {
        return spfFirebase.push(['singpath/problems', pathId, levelId], problem).then(function(ref) {
          return ref;
        });
      },

      get: function(pathId, levelId, problemId) {
        return spfDataStore.problems._Factory(
          ['singpath/problems', pathId, levelId, problemId]
        ).$loaded(function(problem) {
          problem.$levelId = problem.$ref().parent().key();
          problem.$pathId = problem.$ref().parent().parent().key();
          return problem;
        });
      }
    },

    /**
     * Api to create and get a solution to a problem.
     *
     * Note that solution are on accesible while working on it. Once, a
     * solution is resolved, it won't be readable.
     *
     */
    solutions: {
      errMissingPublicId: new Error('No public id for the solution'),
      errMissingUserData: new Error('No current user data. Is the user logged in?'),
      errMissingUserPublicId: new Error('The current user data have no public Id. Is the user registered?'),

      defaults: {
        java: 'public class SingPath {\n  \n}'
      },

      /**
       * Return a solution object composed a meta, payload and results
       * firebase objects field, and of method to update them.
       *
       * @param {firebaseObject} [problem]  Problem the solution is for.
       * @param {firebaseObject} [userData] User registration data (not his profile).
       * @return {Promise}
       */
      get: function(problem, userData) {
        var queueId = 'default';
        var pathId, levelId, problemId, publicId, userUid;

        if (!problem || !problem.$id || !problem.$ref) {
          return $q.reject(new Error('The problem is missing or is not an firebase object.'));
        }

        if (!userData || !userData.$id) {
          return $q.reject(spfDataStore.solutions.errMissingUserData);
        }

        if (!userData.publicId) {
          return $q.reject(spfDataStore.solutions.errMissingUserPublicId);
        }

        problemId = problem.$id;
        levelId = problem.$ref().parent().key();
        pathId = problem.$ref().parent().parent().key();
        publicId = userData.publicId;
        userUid = userData.$id;

        function getPayload() {
          return spfFirebase.loadedObj(
            ['singpath/queuedSolutions', pathId, levelId, problemId, publicId, queueId, 'payload']
          ).catch(NOOP);
        }

        return $q.all({
          payload: getPayload(),
          meta: spfFirebase.loadedObj(
            ['singpath/queuedSolutions', pathId, levelId, problemId, publicId, queueId, 'meta']
          ),
          results: spfFirebase.loadedObj(
            ['singpath/queuedSolutions', pathId, levelId, problemId, publicId, queueId, 'results']
          ),

          /**
           * Check if the problem is started (includes the solved state).
           *
           * @return {Boolean}
           */
          $isStarted: function() {
            return this.meta && this.meta.startedAt;
          },

          /**
           * Check if the problem is solved.
           *
           * @return {Boolean}
           */
          $isSolved: function() {
            return this.meta && this.meta.solved;
          },

          /**
           * Check the state of the user solution is correctly registed
           * in the user solution history and its profile.
           *
           * @param  {firebaseObject}  profile
           * @return {Boolean}
           */
          $isRegistered: function(profile) {
            var profileData;

            if (
              this.meta.solved && (
                !this.meta.history ||
                !this.meta.history[this.meta.startedAt]
              )
            ) {
              return false;
            }

            if (
              !profile ||
              !profile.queuedSolutions ||
              !profile.queuedSolutions[pathId] ||
              !profile.queuedSolutions[pathId][levelId] ||
              !profile.queuedSolutions[pathId][levelId][problemId] ||
              !profile.queuedSolutions[pathId][levelId][problemId][queueId]
            ) {
              return false;
            }

            profileData = profile.queuedSolutions[pathId][levelId][problemId][queueId];

            return (
              profileData.solved === this.meta.solved &&
              profileData.startedAt === this.meta.startedAt
            );
          },

          /**
           * Start/restart a solution.
           *
           * @return {Promise} Resolves whan the solution and user profile
           *                   are updated.
           */
          $reset: function() {
            var self = this;
            var resetData = {};
            var baseSolutionPath = [
              'queuedSolutions', pathId, levelId, problemId, publicId, queueId
            ].join('/');
            var profilePath = [
              'userProfiles', publicId, 'queuedSolutions', pathId, levelId, problemId, queueId
            ].join('/');

            if (this.$isStarted() && !this.$isSolved()) {
              return $q.reject(new Error('A problem can only be reset if it is solved'));
            }

            resetData[baseSolutionPath + '/meta/startedAt'] = spfFirebase.ServerValue.TIMESTAMP;
            resetData[baseSolutionPath + '/meta/endedAt'] = null;
            resetData[baseSolutionPath + '/meta/verified'] = false;
            resetData[baseSolutionPath + '/meta/solved'] = false;
            resetData[baseSolutionPath + '/meta/taskId'] = null;
            resetData[baseSolutionPath + '/payload'] = null;
            resetData[baseSolutionPath + '/results'] = null;

            resetData[profilePath + '/duration'] = null;
            resetData[profilePath + '/language'] = problem.language;
            resetData[profilePath + '/solved'] = false;
            resetData[profilePath + '/startedAt'] = spfFirebase.ServerValue.TIMESTAMP;

            // 1. reset solution.
            return spfFirebase.patch(['singpath'], resetData).then(function() {
              return {
                // 2a. load the payload empty record if it was missing
                // (payload is not readeable when the solution is solved)
                payload: self.payload ? self.payload : getPayload(),

                // 2b. update the solution state in the user profile.
                profile: self.$registerAsStarted()
              };
            }).then(function(data) {
              // 3. add the payload firebaseObj to our solution object
              self.payload = data.payload;
              self.payload.solution = (
                problem.seed ||
                spfDataStore.solutions.defaults[problem.language] ||
                ''
              );
              return self;
            });
          },

          /**
           * Saves the solution payload and enqueue a task to verify it.
           *
           * @param  {string}      solution
           * @return {Promise}              Resolves when the task is enqueued.
           */
          $submit: function(solution) {
            var payload;

            payload = {
              language: problem.language,
              solution: solution,
              tests: problem.tests
            };

            return this.$saveSolution(userUid, payload);
          },

          /**
           * Monitor the solution until it is solved and then register it
           * as solved.
           *
           * @param  {Function} cb Called once the solution is registed as solved.
           * @return {Function}    Function which cancels the watch when called.
           */
          $monitorTask: function(cb) {
            cb = cb || NOOP;

            var self = this;
            var cancel = this.meta.$watch(function() {
              if (self.meta.solved) {
                cancel();
                self.$registerAsSolved().then(cb);
              }
            });

            return cancel;
          },

          /**
           * Update the solution and the user profile if necessary
           *
           * @param  {firebaseObject}  profile
           * @return {Promise}
           */
          $register: function(profile) {
            if (this.$isRegistered(profile)) {
              return $q.when(this);
            }

            if (this.$isSolved()) {
              return this.$registerAsSolved();
            } else {
              return this.$registerAsStarted();
            }
          },

          $destroy: function() {
            this.meta.$destroy();
            this.results.$destroy();
            if (this.payload) {
              this.payload.$destroy();
            }
          },

          /**
           * Update the user profile
           *
           * @private
           */
          $updateProfile: function(solved, duration) {
            var self = this;

            return spfFirebase.set(this.$profilePath(), {
              startedAt: self.meta.startedAt,
              solved: solved || false,
              duration: duration || null,
              language: problem.language
            });
          },

          $profilePath: function() {
            return [
              'singpath', 'userProfiles', publicId, 'queuedSolutions',
              pathId, levelId, problemId, queueId
            ];
          },

          /**
           * Update the solution history
           *
           * @private
           */
          $updateHistory: function(duration) {
            spfFirebase.set(this.$historyPath(), duration || null);
          },

          $historyPath: function() {
            return [
              'singpath', 'queuedSolutions', pathId, levelId, problemId,
              publicId, queueId, 'meta/history', this.meta.startedAt
            ];
          },

          /**
           * Update user profile to flag the problem as started.
           *
           * @private
           */
          $registerAsStarted: function() {
            var self = this;

            return this.$updateProfile(false, null).then(function() {
              return self;
            });
          },

          /**
           * Updates the the solution history and the user profile to flag
           * the problem as solved.
           *
           * @private
           */
          $registerAsSolved: function() {
            var self = this;

            if (!this.meta || !this.meta.solved) {
              return $q.reject(new Error('The solution did not solved the problem'));
            }

            var profilePath = this.$profilePath().slice(1).join('/');
            var historyPath = this.$historyPath().slice(1).join('/');

            var profileData = {
              startedAt: self.meta.startedAt,
              solved: true,
              duration: this.meta.endedAt - this.meta.startedAt,
              language: problem.language
            };

            var data = {};

            data[historyPath] = profileData.duration;
            Object.keys(profileData).forEach(function(key) {
              data[profilePath + '/' + key] = profileData[key];
            });

            return spfFirebase.patch('singpath', data).then(function() {
              return self;
            });
          },

          /**
           * Save the solution payload.
           *
           * @private
           */
          $saveSolution: function(ownerId, payload) {
            var taskId = spfFirebase.ref(['singpath/queues', queueId, 'tasks']).push().key();
            var solutionPath = [
              'singpath', 'queuedSolutions',
              pathId, levelId, problemId, publicId, queueId
            ];
            var taskPath = [
              'singpath', 'queues', queueId, 'tasks', taskId
            ];
            var taskPathStr = taskPath.slice(1).join('/');
            var solutionPathStr = solutionPath.slice(1).join('/');
            var data = {};
            var solutionData = {
              'meta/endedAt': spfFirebase.ServerValue.TIMESTAMP,
              'meta/taskId': taskId,
              'meta/verified': false,
              'meta/solved': false,
              'payload': payload
            };
            var taskData = {
              owner: ownerId,
              payload: payload,
              solutionRef: solutionPath.join('/'),
              createdAt: spfFirebase.ServerValue.TIMESTAMP,
              started: false,
              completed: false,
              consumed: false
            };

            Object.keys(solutionData).forEach(function(key) {
              data[solutionPathStr + '/' + key] = solutionData[key];
            });

            Object.keys(taskData).forEach(function(key) {
              data[taskPathStr + '/' + key] = taskData[key];
            });

            return spfFirebase.patch('/singpath', data);
          }
        });
      },

      listSolutions(pathId, levelId, problemId) {
        var limit = 25;
        var ref = spfFirebase.ref([
          'singpath/queuedSolutions', pathId, levelId, problemId
        ], {
          orderByKey: true,
          limitToFirst: limit
        });
        var users = {};

        function query(startAt) {
          var q = startAt ? ref.startAt(startAt) : ref;

          return q.once('value').then(function(snapshot) {
            var solutions = snapshot.val() || {};
            var ids = Object.keys(solutions).sort();

            ids.forEach(function(id) {
              users[id] = true;
            });

            if (ids < limit) {
              return Object.keys(users);
            }

            return query(ids.slice(-1).pop());
          });
        }

        return query();
      }
    }
  };

  return spfDataStore;
}

factory.$inject = [
  '$q',
  '$http',
  '$log',
  '$firebaseObject',
  '$firebaseArray',
  'spfAuth',
  'spfAuthData',
  'spfFirebase'
];
