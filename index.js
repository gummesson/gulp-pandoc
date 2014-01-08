/* Modules */

var pdc   = require('pdc');
var map   = require('map-stream');
var gutil = require('gulp-util');

/* Plugin */

var PluginError = gutil.PluginError;
var PluginName  = 'gulp-pandoc';

/* Exports */

module.exports = function(opts) {
  var from = opts.from;
  var to   = opts.to;
  var ext  = opts.ext;
  var args = opts.args;

  if (!from) { throw new PluginError(PluginName, '"from" is not defined'); }
  if (!to) { throw new PluginError(PluginName, '"to" is not defined'); }
  if (!ext) { throw new PluginError(PluginName, '"ext" is not defined'); }

  var pandoc = function(file, cb) {
    var input = file.contents.toString();
    if (file.isNull())  { return this.emit('data', file); }
    if (file.isStream()) { return this.emit('error', new PluginError(PluginName, 'Streaming not supported')); }

    pdc(input, from, to, args, function(err, output) {
      if (err) { this.emit('error', err); }
      file.contents = new Buffer(output);
      file.path = gutil.replaceExtension(file.path, opts.ext);
      cb(null, file);
    }.bind(this));
  };

  return map(pandoc);
};
