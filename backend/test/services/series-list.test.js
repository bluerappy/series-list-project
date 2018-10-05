const assert = require('assert');
const app = require('../../src/app');

describe('\'series-list\' service', () => {
  it('registered the service', () => {
    const service = app.service('series-list');

    assert.ok(service, 'Registered the service');
  });
});
