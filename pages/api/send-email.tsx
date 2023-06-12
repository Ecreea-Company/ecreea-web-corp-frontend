import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body

    const contentHTML = `
      <div style="background-color: #f6f6f6; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #333;">Nuevo postulante</h2>
          <div style="background-color: #fff; padding: 20px; margin: 10px 0; border-radius: 10px; border: 1px solid #ddd;">
              <h3 style="color: #666;">Información del postulante</h3>
              <p style="color: #333;"><strong>Correo electrónico:</strong> ${email}</p>
          </div>
          <p style="color: #333;">El CV del postulante se puede ver en la plataforma de Strapi.</p>
          <p style="color: #333;">Haz clic en el siguiente enlace para verlo:</p>
          <a href="https://strapi.ecreea.com/admin" style="background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Ver CV en Strapi</a>
          <p style="color: #333; margin-top: 30px;">¡Gracias por utilizar nuestra plataforma!</p>
      </div>
    `

    const mailHeaders = {
      from: `Postulantes Ecreea <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVE,
      cc: [process.env.EMAIL_CC] as string[],
      subject: 'Nuevo formulario de postulante',
      html: contentHTML
    }

    try {
      await transporter.sendMail(mailHeaders)
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' })
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error)
      res
        .status(500)
        .json({ error: 'Ocurrió un error al enviar el correo electrónico' })
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}
