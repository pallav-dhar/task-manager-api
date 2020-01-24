const sgMail = require('@sendgrid/mail') 


sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

const sendWelcomeFunction = (email,name) => {
  sgMail.send({
      to : email,
      from : 'sonu.vardhan9852@gmail.com',
      subject : 'thanks for joining ',
      text : `welcome to the app, ${name}. let me know how you get along with this app`
  })
}

const sendDeleteFunction = (email,name) => {
    sgMail.send({
        to : email,
        from : 'sonu.vardhan9852@gmail.com',
        subject : 'Deleting yoour account ',
        text : `Your Account will be deleted in a  minute, ${name}. please  let me why you want to delete your account`
    })
  }

module.exports = {sendWelcomeFunction, sendDeleteFunction}