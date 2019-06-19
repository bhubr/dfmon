const { promisify } = require('util');
const { exec } = require('child_process');

module.exports = promisify(exec);
