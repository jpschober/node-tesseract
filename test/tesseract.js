'use strict';

const tesseract = require('../lib/tesseract');
const should = require('should');


describe('process', function(){
  it('should return the string "node-tesseract"', function(done){

    const testImage = __dirname + '/test.png';

    tesseract.process(testImage, function(err, text) {
      should.not.exists(err);
      text.trim().should.equal('node-tesseract');
      done();
    });

  })
})

