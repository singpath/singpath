'use strict';

import {singpath} from '../module';

/**
 * Label paths - to be used by each component to configure their route.
 *
 * See src/app/components/events for example.
 *
 */
singpath.constant('routes', {
  home: '/paths',
  temp: '/temp',
  temp1: '/temp1',
  profile: '/profile',
  paths: '/paths',
  newPath: '/paths/new-path',
  levels: '/paths/:pathId/levels',
  newLevel: '/paths/:pathId/levels/new-level',
  problems: '/paths/:pathId/levels/:levelId/problems',
  editProblems: '/paths/:pathId/levels/:levelId/edit',
  playProblem: '/paths/:pathId/levels/:levelId/problems/:problemId/play'
});
