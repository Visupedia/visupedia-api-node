/**
 * Main client for the module
 */
var Client = function(auth, options) {
  this.httpClient = new (require('./http_client').HttpClient)(auth, options);

  return this;
};

/**
 * Returns an MyVisu api instance
 *
 * @param "key" The api key provided by Visupedia
 */
Client.prototype.visu = function (key) {
    return new (require('./api/visu'))(key, this.httpClient);
};

// Export module
module.exports = Client;
