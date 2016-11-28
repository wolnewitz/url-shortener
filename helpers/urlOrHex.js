var urlOrHex = function(str) {
  if(str.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
    return "url";
  } else if(str.match(/^[0-9a-z]{32}$/)) {
    return "md5";
  }
  return false;
}

module.exports = urlOrHex;
