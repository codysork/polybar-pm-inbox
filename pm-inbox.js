#!/bin/node

const ProtonMail = require('protonmail-api');

(async () => {
  const pm = await ProtonMail.connect({
    username: 'YOUR_EMAIL@YOURDOMAIN.COM',
    password: 'YOUR_PASSWORD_HERE'
  })

// Get emails from inbox
const emailsInInbox= await pm.getEmails('inbox')
const emailCount = Object.keys(emailsInInbox).length

if (emailCount === 0) {
  console.log(" " + emailCount)
}
else {
  console.log("﫮 " + emailCount)
}

pm.close()
})()
