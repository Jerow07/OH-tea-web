require('dotenv').config()
import nodemailer from 'nodemailer';

export default function sendMail(req:any, res:any) {
  console.log(process.env.BURNER_EMAIL_PASSWORD)
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'burner.ohtea@gmail.com',
      pass:  process.env.BURNER_EMAIL_PASSWORD
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: 'info@ohtea.com.ar',
    subject: `Mensaje de ${req.body.name} desde la web`,
    text: req.body.message,
    html: `<div><p>Email del cliente: ${req.body.email}</p><br />${req.body.message}</div>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}