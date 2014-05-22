/**
 * Returns an MyVisu api instance
 *
 * @param "key" The api key provided by Visupedia
 */
var Visu = function(key, client) {
  this.key = key;
  this.client = client;

  return this;
};

/**
 * Returns all information about the wanted Visu
 *
 * '/api?key=:key&id=:id&lang=:lang&version=:version' GET
 *
 * @param "id" The unique ID of the Visu
 * @param "lang" The language code wanted for the Visu
 * @param "version" Use a specific version of our API
 */
Visu.prototype.get = function (id, lang, version, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});
  body['id'] = id;
  body['lang'] = lang;
  body['version'] = version;

  this.client.get('/api?key=' + this.key + '&id=' + id + '&lang=' + lang + '&version=' + version + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Visu
