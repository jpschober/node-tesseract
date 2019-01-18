'use strict';

const tesseract = require('../lib/tesseract');
const should = require('should');


describe('process', function() {
  it('should return the string "node-tesseract" with callback', function(done) {

    const testImage = __dirname + '/test.png';

    tesseract.process(testImage, function(err, text) {
      should.not.exists(err);
      text.trim().should.equal('node-tesseract');
      done();
    });

  }),
  it('should return the string "node-tesseract" as Promise', function(done) {

    const testImage = __dirname + '/test.png';

    tesseract.process(testImage).then(text => {
      text.trim().should.equal('node-tesseract');
      done();
    }).catch(err => {
      done(err);
    });
  }),
  it('should return the string "node-tesseract" as Promise with options', function(done) {

    const testImage = __dirname + '/test.png';

    const opts =  { lang: 'eng' };
    tesseract.process(testImage, opts).then(text => {
      text.trim().should.equal('node-tesseract');
      done();
    }).catch(err => {
      done(err);
    });
  })
});

