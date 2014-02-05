/* Modules */

var must   = require('must');
var gutil  = require('gulp-util');
var pandoc = require('./index');

/* Tests */

describe('pandoc()', function() {

  it('must throw an error if pdc args are incorrect', function(done) {
    var file = new gutil.File({
      path: 'test.md',
      contents: new Buffer('"This is a test."')
    });

    var stream = pandoc({
      from: 'markdown',
      to: 'pdf',
      ext: '.html',
      args: ['--smart']
    });

    stream.on('error', function(err) {
      err.must.include('Error: pandoc exited with code 9');
      done();
    });

    stream.write(file);
  });

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
