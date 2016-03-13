'use strict';

import {singpath} from '../../module.js';
import tmpl from './singpath-view.html!text';
import './singpath.css!';

singpath.component('singpath', {
  template: tmpl
});
