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

let sendRecoveryEmail = (token, toEmail, userName) => {

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


let sendContactEmail = (tema, msg, toEmail, fromEmail, fromName, toName) => {

    const toText = `\n    
        Olá ${toName},\n
        ${fromName} entrou em contato com você através do app Insight.
        Segue abaixo a mensagem dessa pessoa.
        \n\n\n
        De:${fromEmail}
        Tema:${tema}\n
        Msg:${msg}`

    const fromText = `\n    
    Olá ${fromName},\n
    Você entrou em contato com ${toName} através do app Insight.
    Segue abaixo a sua mensagem.
    \n\n\n
    Para: ${toEmail}
    Tema:${tema}\n
    Msg:${msg}`

    const toContent = {
        from: "[APP INSIGHT] " + process.env.MAIL_USER,
        to: toEmail,
        subject: "Contato via app Insight",
        text: toText,
        html: "" 
    }

    const fromContent = {
        from: "[APP INSIGHT] " + process.env.MAIL_USER,
        to: fromEmail,
        subject: "Contato via app Insight",
        text: fromText,
        html: "" 
    }
    
    transporter.sendMail(toContent, (error, data) => {
        if(error){
            console.log(error);
            console.log("Not Sent\n\n\n");
            
        }else{
            console.log("Email to receiver Sent");
        }    
    });

    transporter.sendMail(fromContent, (error, data) => {
        if(error){
            console.log(error);
            console.log("Not Sent\n\n\n");
            
        }else{
            console.log("Email to sender Sent");
        }    
    });
};


module.exports = {sendRecoveryEmail, sendContactEmail};
