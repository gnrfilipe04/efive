var nodemailer = require("nodemailer");
const express = require('express')

const app = express()

var remetente = nodemailer.createTransport({
    host: 'mail.estefanemedeiros.com',
    service: 'mail.estefanemedeiros.com',
    port: 587,
    secure: true,
    auth: {
        user: 'contato@estefanemedeiros.com.br',
        pass: '@Estefane1'
    }
});

var emailASerEnviado = {
    from: 'gnr_filipe@hotmail.com',
    to: 'contato@estefanemedeiros.com.br',
    subject: 'Enviando Email com Node.js',
    text: 'Estou te enviando este email com node.js',
};

remetente.sendMail(emailASerEnviado, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado com sucesso.');
    }
});

app.listen(3001)