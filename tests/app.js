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

describe("/:url", function() {
  describe("when given a url", function() {
    it("returns json", function(done) {
      chai.request(app)
        .get('/www.google.com')
        .end(function(err, res) {
          if(err) throw err;
          expect(res).to.be.json
          done();
        });
    });
  });
  
  describe("when given a md5", function() {
    //it("it redirects", function(done) {
      //var URI = '/' + md5('http://www.google.com');
      //chai.request(app)
        //.get(URI)
        //.end(function(err, res) {
          //if(err) throw err;
          //done();
        //});
    //});
  });
});

