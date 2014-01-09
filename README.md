# gulp-pandoc [![NPM version](https://badge.fury.io/js/gulp-pandoc.png)](http://badge.fury.io/js/gulp-pandoc) [![Build Status](https://travis-ci.org/gummesson/gulp-pandoc.png?branch=master)](https://travis-ci.org/gummesson/gulp-pandoc)

> Pandoc plugin for gulp.

## Usage

First, install `gulp-pandoc` as a development dependency:

~~~ shell
npm install gulp-pandoc --save-dev
~~~

Then, add it to your `gulpfile.js`:

~~~ javascript
var pandoc = require('gulp-pandoc');

gulp.task('docs', function() {
  gulp.src('docs/*.md')
    .pipe(pandoc({
      from: 'markdown',
      to: 'html5',
      ext: '.html',
      args: ['--smart']
    }))
    .pipe(gulp.dest('public/'));
});
~~~

## API

### pandoc(options)

Since Pandoc covers a big range of markup formats the `options.from`, `options.to` and `options.ext` parameters are *required*.

#### options.from

**Type:** string

The markup format that your documents are authored in, eg: `markdown`.

#### options.to

**Type:** string

The markup format that you want to convert your documents into, eg: `html5`.

#### options.ext

**Type:** string

The extension of the soon-to-be converted documents, eg: `.html`.

#### options.args

**Type:** array

Additional command line flags, eg: `['--smart', '--css=style.css']`.

## License

The MIT License (MIT)

Copyright (c) 2014 Ellen Gummesson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
