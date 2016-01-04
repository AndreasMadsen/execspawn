
var extend = require('util-extend');
var spawn = require('child_process').spawn;
var fs = require('fs')

module.exports = function execstream(command, options) {
  var file, args;
  options = extend({}, options);

  if (process.platform === 'win32') {
    file = 'cmd.exe';
    args = ['/s', '/c', '"' + command + '"'];
    options.windowsVerbatimArguments = true;
  } else {
    var exists = fs.existsSync('/bin/bash')
    file = exists ? '/bin/bash' : '/bin/sh';
    args = ['-c', command];
    options.windowsVerbatimArguments = false;
  }

  return spawn(file, args, options);
};
