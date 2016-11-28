var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');
var schema = require('./../link');

// this code prevents the model from compliling twice which
// was causing errors
var Link 
try {
  Link = mongoose.model("Link");
} catch(error) {
  Link = mongoose.model("Link", schema);
}

describe("Link model", function() {
  before(function(done) {
    if (mongoose.connection.db) return done();

    mongoose.connect("mongodb://localhost:27017/shortener-test", done);
  });

  after(function(done) {
    Link.remove({}, done);
  });

  it("can be saved to db", function(done) {
    Link.create({url: "www.google.com", key: '12345'}, function(err, link) {
      if(err) throw err;
      expect(link.key).to.equal('12345');
      expect(link.url).to.equal('www.google.com');
      done();
    });  
  });


  it("another can be saved", function(done) {
    Link.create({url: "www.yahoo.com", key: '123456'}, function(err, link) {
      if(err) throw err;
      expect(link.key).to.equal('123456');
      expect(link.url).to.equal('www.yahoo.com');
      done();
    });  
  });

  it("clears the collection", function(done) {
    Link.find({}, function(err, results) {
      if(err) throw err;
      expect(results.length).to.equal(2);
    });
    done();
  });

  describe("saveURL", function() {
    it("saves the url and key", function(done) {
      Link.saveURL('bit.ly', function(err, link) {
        expect(link.length).to.equal(1);
        expect(link[0].url).to.equal('bit.ly');
      });
      done();
    });

    it("saves the url only once", function(done) {
      Link.saveURL('bit.ly', function(){});
      Link.saveURL('bit.ly', function(){});
      Link.saveURL('bit.ly', function(){});
      Link.find({url: 'bit.ly'}, function(err, link) {
        expect(link.length).to.equal(1);
        expect(link[0].url).to.equal('bit.ly');
      });
      done();
    });
  });
  
});

