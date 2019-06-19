const nodemailer = require('nodemailer');
const {
  email: { transport: transportSettings, from, to }
} = require('./settings');

// async..await is not allowed in global scope, must use a wrapper
async function main(freeMbytes, dfOutput){

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(transportSettings);

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from,
    to,
    subject: `Low disk usage: ${freeMbytes}M free`,
    html: `<pre><code>${dfOutput}</code></pre>`
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return info;
}

module.exports = main;