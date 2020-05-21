const mail = require('../../mail/mail');

/**
 * Resquest expected
 * {
 *  "toEmail":"email to send",
 *  "toName": "name to send msg",
 *  "fromEmail":"email who send the email"
 *  "fromName":"name who send the email",
 *  "message":"message to send"
 *  "theme":"theme to send"
 * }
 */
module.exports = async (req, res) => {
  const {
    toEmail,
    toName,
    fromEmail,
    fromName,
    message,
    theme
  } = req.body;

  if( toEmail && toName && fromEmail && fromName && message && theme){
    try{
      await mail.sendContactEmail(theme,message, toEmail, fromEmail, fromName, toName);
      return res.send({ message:'Contact Done' });
    }catch(e){
      console.log(e);
    }
  }
  return res.status(400).send({ error: 'cant sent emails' });
}