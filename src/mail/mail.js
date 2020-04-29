require('dotenv').config();
const nm = require('nodemailer');
const config = require('../config/config.json');

var transporter = nm.createTransport({
    host: config.MAIL_HOST,
    port: config.MAIL_PORT,
    secure: config.MAIL_SECURE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

var sendRecoveryEmail = (token, toEmail, userName) => {

    const texto = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
        <title>Copiar HTML</title>
    </head>
    <body>
        
        Olá ${userName}, <br>
        Você solicitou sua senha por esquecimento.<br>
        Aqui está o token para atulizar sua senha, copie e cole no app onde solicitado:
        <br><br><br>
        <strong>${token}</strong>
        <br>
        
    </body>
    </html>`

    const content = {
        from: "[APP INSIGHT] " + process.env.MAIL_USER,
        to: toEmail,
        subject: "Recuperação de senha",
        text: "",
        html: texto 
    }
    
    transporter.sendMail(content, (error, data) => {
        if(error){
            console.log(error);
            console.log("Not Sent\n\n\n");
            
        }else{
            console.log("Email Sent");
        }    
    });
};


module.exports = {sendRecoveryEmail};
