const nodemailer = require('nodemailer');

const postSendEmail = async (req, res) => {
    try {
        //Datos necesarios para el envío de mail (destinatario)
        const { to, subject, text } = req.body;

        // Configurar el transporter de nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Puedes usar otro servicio de correo aquí
            auth: {
                user: 'jorge.tarazona.co@gmail.com',
                pass: 'Jt20410394*',
            },
        });

        // Configurar los detalles del correo electrónico (Remitente)
        const mailOptions = {
            from: 'jorge.tarazona.co@gmail.com',
            to: to,
            subject: subject,
            text: text,
        };

        // Enviar el correo electrónico
        await transporter.sendMail(mailOptions);

        console.log('Correo electrónico enviado!!!');
        res.status(200).json({ message: 'Correo electrónico enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
};

module.exports = postSendEmail;
