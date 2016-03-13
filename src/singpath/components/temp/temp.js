'use strict';

import {singpath} from '../../module.js';
import tmpl from './temp.html!text';
import tmpl1 from './temp1.html!text';

singpath.config([
  '$routeProvider',
  'routes',
  function($routeProvider, routes) {
    $routeProvider.

    when(routes.temp, {
      template: tmpl,
      controller: 'TempCtrl',
      controllerAs: 'ctrl'
    }).

    when(routes.temp1, {
      template: tmpl1,
      controller: 'TempCtrl',
      controllerAs: 'ctrl'
    });

  }
]);

/**
 * TempCtrl for Jasmine controller test experiements.
 *
 */
singpath.controller('TempCtrl', [
  function TempCtrl() {
    this.name = 'Chris';

    this.add = function(a, b) {
      return a + b;
    };

    this.subtract = function(a, b) {
      return a - b;
    };
  }
]);
