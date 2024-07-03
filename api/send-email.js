// /api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
    try {
      // Sua lógica aqui
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('Serverless function error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient@example.com',
    subject: subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    res.status(500).json({ error: 'Erro ao enviar o email.' });
  }
};
