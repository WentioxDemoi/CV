const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'remi.desbordes.pro@gmail.com',
    pass: 're92de85&*',
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'Remi.desbordes.pro@gmail.com',
    to: 'Remi.desbordes.pro@gmail.com',
    subject: 'Nouveau message de contact',
    text: `De : ${name}\nEmail : ${email}\nMessage : ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('E-mail envoyé avec succès');
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});


const express = require('express');
const path = require('path');


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});