var addHTTP = require('./../helpers/addHTTP.js');
var chai = require('chai');
var expect = chai.expect;

describe("addHTTP helper", function() {
  it("adds protocol to non http address", function() {
    expect(addHTTP('www.google.com')).to.equal('http://www.google.com');  
  });

  it("doesn't add for http and https", function() {
    expect(addHTTP('http://www.google.com')).to.equal('http://www.google.com');  
    expect(addHTTP('https://www.google.com')).to.equal('https://www.google.com');  
  });
});

