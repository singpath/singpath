'use strict';

import angular from 'angular';
import 'firebase';
import 'angularfire';
import 'angular-loading-bar';
import 'angular-animate';
import 'angular-messages';
import 'angular-route';
import {spfShared} from '../shared/index';

export const singpath = angular.module('spf', [
  'angular-loading-bar',
  'firebase',
  'ngAnimate',
  'ngMessages',
  'ngRoute',
  spfShared.name
]);
