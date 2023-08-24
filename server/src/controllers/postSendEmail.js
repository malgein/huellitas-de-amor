const nodemailer = require('nodemailer');

const postSendEmail = async (req, res) => {
    try {
        //Datos necesarios para el envío de mail (destinatario)
        const { to, subject, text } = req.body;

        // Configurar el transporter de nodemailer
        const transporter = nodemailer.createTransport({
           service: 'Gmail',
            auth: {
                user: 'g.javier.jgl@gmail.com',
                pass: 'iuvuvgxmgtequwej',
            },
        });

        // Configurar los detalles del correo electrónico (Remitente)
        const mailOptions = {
            from: 'g.javier.jgl@gmail.com',
            to: to,
            subject: subject,
            text: text,
        };

        // Enviar el correo electrónico
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Correo electrónico enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
};

module.exports = postSendEmail;
