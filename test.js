/* Modules */

var must   = require('must');
var gutil  = require('gulp-util');
var pandoc = require('./index');

/* Tests */

// 1. Pandoc returns a bunch of carriage returns that's
//    *really* hard to deal with.

describe('pandoc()', function() {
  it('must compile Markdown to HTML', function(done) {
    var file = new gutil.File({
      path: 'test.md',
      contents: new Buffer('"This is a test."')
    });

    var stream = pandoc({
      from: 'markdown',
      to: 'html',
      ext: '.html',
      args: ['--smart']
    });

    stream.on('error', done);

    stream.on('data', function(file) {
      var content = file.contents.toString().trimRight(); // [1]
      file.relative.must.be('test.html');
      content.must.be('<p>“This is a test.”</p>');
      done();
    });

    stream.write(file);
  });
});
