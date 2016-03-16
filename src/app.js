'use strict';

import angular from 'angular';
import {singpath} from './singpath/index.js';

singpath.config([
  'spfFirebaseRefProvider',
  function(spfFirebaseRefProvider) {
    const id = window.SINGPATH && window.SINGPATH.firebaseId || 'singpath';

    spfFirebaseRefProvider.setBaseUrl(`https://${id}.firebaseio.com/`);
  }
]);

singpath.run([
  '$window',
  'spfServicesUrl',
  function($window, spfServicesUrl) {
    const backend = $window.SINGPATH && $window.SINGPATH.backendURL || 'http://api.singpath.com/';

    spfServicesUrl.backend = backend;
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [singpath.name], {strictDi: true});
});
