const cron = require('node-cron');
const { cron: { interval }, df } = require('./settings');
const runDf = require('./runDf');
const mailer = require('./mailer');

cron.schedule(interval, () => {
  runDf()
    .then(({ output, free }) => {
    if (free < df) {
      console.log(`${new Date()} [alert] low free space ${free}M`);
      mailer(free, output)
        .then(info => console.log(info))
        .then(err => console.error(err));
    }
  });
});