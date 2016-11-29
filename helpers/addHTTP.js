var addHTTP = function(uri) {
  if(!(/^https?/).test(uri)) {
    return 'http://' + uri;
  }
  return uri;
}

module.exports = addHTTP;
