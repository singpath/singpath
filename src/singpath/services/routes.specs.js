import * as routes from './routes.js';
import {expect} from 'chai';

describe('routes service', function() {

  it('should define home route', function() {
    expect(routes.map.home).be.ok;
  });

  it('should set home to paths routes', function() {
    expect(routes.map.home).to.equal(routes.map.paths);
  });

});
