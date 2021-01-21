import nodemailer from "nodemailer";

module.exports = (req, res) => {

    var remetente = nodemailer.createTransport({
        host: 'smtp.live.com',
        secureConnection: false,
        port: 587,
        auth: {
            user: 'gnr_filipe@hotmail.com',
            pass: 'flp190295'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    var emailASerEnviado = {
        from: 'gnr_filipe@hotmail.com',
        to: ['contato@estefanemedeiros.com', 'gnr_filipe@hotmail.com'],
        replyTo: 'contato@teste.com',
        subject: 'Enviando Email com Node.js',
        text: 'Estou te enviando este email com node.js',
    };

    remetente.sendMail(emailASerEnviado, function (error, a, b) {
        console.log(error)
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado com sucesso.');
        }
    });
}