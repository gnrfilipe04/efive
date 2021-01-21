import nodemailer from "nodemailer";

module.exports = (req, res) => {

    var remetente = nodemailer.createTransport({
        name: 'no-reply@estefanemedeiros.com',
        host: 'mail.estefanemedeiros.com',
        service: 'mail.estefanemedeiros.com',
        port: 465,
        secure: true,
        auth: {
            user: 'contato@estefanemedeiros.com',
            pass: '@Estefane1'
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

    res.json({
        nome: "Filipe"
    })

}