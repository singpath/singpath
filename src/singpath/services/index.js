/**
 * Singpath services.
 *
 * Note: if a service usage is limited to a component, it should be defined with the component.
 */
'use strict';

import {singpath} from '../module.js';
import * as datastore from'./datastore.js';
import * as routes from './routes.js';

singpath.constant('routes', routes.map);
singpath.factory('spfDataStore', datastore.factory);
