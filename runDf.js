const execAsync = require('./execAsync');
const { cron: { device } } = require('./settings');

function extractFree(dfOutput) {
  const fields = dfOutput
    .split('\n')
    .filter((line, i) => line.includes(device))
    .join('')
    .split(/\s+/);
  if (!fields || !fields[3]) {
    throw new Error('Could not format output');
  }
  return Number(fields[3]);
}

const runDf = () => execAsync('df -m')
  .then(({ stdout }) => ({
    output: stdout,
    free: extractFree(stdout)
  }));

module.exports = runDf;