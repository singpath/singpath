# Contributing

Pull Resquests (PR) are welcomes.


## Install

Fork [Singpath], then:

```shell
git clone git@github.com:your-user-id/singpath.git
cd singpath
git remote add upstream https://github.com/singpath/singpath.git
npm install
```


## Feature branch

Avoid working on fixes and new feature in your master branch. It will prevent
you from submitting focussed pull request or from working on more than one
fix/feature at a time.

Instead, create a branch for each fix or feature:
```shell
git checkout master
git pull upstream master
git checkout -b <branch-name>
```

Work and commit the fixes/features, and then push your branch:
```shell
git push origin <branch-name>
```

Visit your fork and send a Pull Request from that branch; the PR form URL
will have this form:

    https://github.com/singpath/singpath/compare/master...<your-github-username>:<branch-name>

Once your PR is accepted:
```shell
git checkout master
git push origin --delete <branch-name>
git branch -D <branch-name>
git pull upstream master
```


## Firebase Access

If you don't have access to `singpath` or `singpath-play` Firebase DBs, edit
`src/index.html` and `dist/singpath/index.html` to point to the correct
Firebase DB id; edit the `window.SINGPATH.firebaseId`. E.g.:
```javascript
window.SINGPATH = {
  firebaseId: 'my-firebase-db'
};

System.import(
  './app.js'
).catch(
  console.error.bind(console)
);
```

To setup your Firebase DB:
```
npm install -g @singpath/rules
singpath-rules init-db -f my-firebase-db
```


## Run Dev server

To start a server listening on "https://localhost:8081":
```shell
npm start
```


## Building app bundle

To build a minified bundles of the singpath apps and its dependencies:
```shell
npm run build
```

To serve it:
```shell
npm run serve-build
```


## Github Pages

To build and push the app to the remote "origin" gh-pages branch:
```shell
npm run build:gh-pages -- "my-firebase-database-name"
```

To let Travis update your Github pages automatically (only when master get updated),
you will need to enable Travis for your fork and set up some environment variables.

Using [Travis CLI]:
```shell
travis enable
travis env set --public PROD_FIREBASE_ID "my-firebase-database-name"
travis env set --private GH_TOKEN some-github-oauth-token
```

You can create a Github Oauth token on your [personal access tokens] setting page.
Make sure `GH_TOKEN` is set as private, or a pull request could steal that token.


[Singpath]: https://github.com/singpath/singpath
[Travis CLI]: https://github.com/travis-ci/travis.rb#installation
[personal access tokens]: https://github.com/settings/tokens
