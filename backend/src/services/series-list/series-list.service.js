// Initializes the `series-list` service on path `/series-list`
const createService = require('feathers-mongoose');
const createModel = require('../../models/series-list.model');
const hooks = require('./series-list.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/series-list', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('series-list');

  service.hooks(hooks);
};
