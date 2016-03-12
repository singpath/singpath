'use strict';

import {singpath} from './module';
import './services/index';
import './components/index';
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
