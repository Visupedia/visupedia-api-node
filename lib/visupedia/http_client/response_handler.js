var response = module.exports;

/**
 * This module takes care of decoding the response body into suitable type
 */
response.getBody = function(res, body, callback) {
  var type = res.headers['content-type'], error = null;

  return callback(error, res, body);
};
