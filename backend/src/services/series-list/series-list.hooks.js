const { authenticate } = require('@feathersjs/authentication').hooks;
const customLowerCase = require('../../hooks/customLowerCase-hook');


const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [customLowerCase('title')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
