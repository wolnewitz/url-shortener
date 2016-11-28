var urlOrHex = require('./../helpers/urlOrHex.js');
var chai = require('chai');
var expect = chai.expect;

describe("urlOrHex helper", function() {
  it("returns url for url strings", function() {
    expect(urlOrHex("www.google.com")).to.equal("url");  
    expect(urlOrHex("www.something.com/soething/something")).to.equal("url");  
    expect(urlOrHex("bit.ly/1222")).to.equal("url");  
    expect(urlOrHex("www.testing.org/something.html")).to.equal("url");  
  });

  it("returns hex for hex values strings", function() {
    expect(urlOrHex("00236a2ae5")).to.equal("md5");  
  });

  it("return false for other strings", function() {
    expect(urlOrHex("banana")).to.equal(false);  
  });
  
});

