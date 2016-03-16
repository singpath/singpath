'use strict';

import angular from 'angular';
import 'firebase';
import 'angularfire';
import 'angular-material';
import 'angular-loading-bar';
import 'angular-animate';
import 'angular-messages';
import 'angular-route';
import {spfShared} from 'singpath-core';

export const singpath = angular.module('spf', [
  'angular-loading-bar',
  'firebase',
  'ngAnimate',
  'ngMessages',
  'ngRoute',
  'ngMaterial',
  spfShared.name
]);

singpath.value('spfServicesUrl', {
  backend: 'http://api.singpath.com/'
});
