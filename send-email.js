const nodemailer = require('nodemailer');



// criar um transporter

let transporter = nodemailer.createTransport({
    host: 'smtp@gmail.com',     // process.env.EMAIL_HOST(nome da variavel de ambiente)
    port: '456',
    secure: true,  // Aqui é true se a porta for 465
    auth: {
        user: 'avilamatheus002@gmail.com',
        pass: 'tzus gupj vkij pkkg'
    }
});

// Criar a mensagem/processo para enviar o e-mail.

send = async () => {

let info = await transporter.sendMail({
        from: 'Satanás te enviou um email bastante curioso...',
        to: "avilamatheus002@gmail.com",
        subject: "Olá - teste de mensagem",
        text: 'Seja bem vindo ao carseiro privado!', // versão em texto plano
        html: "<strong>VENHA CONHECER O CAPETA, PECADOR IMUNDO!</strong>" // Versão em HTML que aceita tags HTML

});

console.log(`Mensagem envida: ${info.messageId}`)

}

send()