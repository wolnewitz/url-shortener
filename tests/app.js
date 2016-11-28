var app = require('./../app');
var chai = require('chai');
var chaiHTTP = require('chai-http');
var expect = chai.expect;
var md5 = require('js-md5');

chai.use(chaiHTTP);

describe("'/' root", function() {
  it("renders HTML", function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        if(err) throw err;
        expect(res).to.have.status(200);
        done();
      }) 
  });

  it("renders correct body", function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        if(err) throw err;
        expect(res.text).to.match(/Shortener/);
        done();
      });
  });
});

describe("/new/:url", function() {
  it("returns json", function(done) {
    chai.request(app)
      .get('/new/www.testing.com')
      .end(function(err, res) {
        if(err) throw err;
        expect(res).to.be.json
        done();
      });
  });
});

describe("/:md", function() {
});


