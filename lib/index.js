var Client = require('./visupedia/client');

// Export module
var visupedia = module.exports;

/**
 * This file contains the global namespace for the module
 */
visupedia.client = function(auth, options) {
  return new Client(auth, options);
};
