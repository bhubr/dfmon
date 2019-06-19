module.exports = {
  cron: {
    interval: '* * * * * *',
    device: '/dev/sda1'
  },
  email: {
    transport: {
      service: 'gmail',
      auth: {
        user: 'gmailuser@gmail.com',
        pass: 'GmailPassword'
      }
    },
    from: 'gmailuser@gmail.com',
    to: 'foo@gmail.com,bar@gmail.com'
  },
  df: 9000
};