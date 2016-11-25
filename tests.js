var app = require('./app');
var chai = require('chai');
var chaiHTTP = require('chai-http');
var expect = chai.expect;

chai.use(chaiHTTP);

describe("'/' root", function() {
  it("renders HTML", function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        if(err) throw err;
        expect(res).to.have.status(200);
        expect(res.text).to.match(/Shortener/);
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
