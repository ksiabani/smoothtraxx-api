var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'smoothtraxx-api'
    },
    port: 3000,
    db: 'mongodb://localhost/smoothtraxx-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'smoothtraxx-api'
    },
    port: 3000,
    db: 'mongodb://localhost/smoothtraxx-api-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'smoothtraxx-api'
    },
    port: 3000,
    db: 'mongodb://localhost/smoothtraxx-api-production'
  }
};

module.exports = config[env];
