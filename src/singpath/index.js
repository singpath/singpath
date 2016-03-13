'use strict';

import {singpath} from './module.js';
import './services/index.js';
import './components/index.js';
import './singpath.css!';

/**
 * Configure routes default route and cfpLoadingBar options.
 *
 */
singpath.config([
  '$routeProvider',
  'routes',
  function($routeProvider, routes) {
    $routeProvider.otherwise({
      redirectTo: routes.home
    });
  }
]);

export {singpath};
