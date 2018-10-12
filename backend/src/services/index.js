const seriesList = require('./series-list/series-list.service.js');
const users = require('./users/users.service.js');
const projects = require('./projects/projects.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(seriesList);
  app.configure(users);
  app.configure(projects);
};
