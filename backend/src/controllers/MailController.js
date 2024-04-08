import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'
import UserRepository from '../repositories/UserRepository.js'
import randomPassword from '../utils/passwordGenerator.js'

const { hash } = bcrypt

export default class MailController {
  static async sendEmailForgotPassword(req, res) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.APP_ADDRESS,
          pass: process.env.APP_PASSWORD,
        },
      })

      const { email } = req.body

      const user = await UserRepository.findByEmail(email)

      if (!user) {
        return res.status(400).json({
          message: 'E-mail não encontrado em nossa base de dados',
        })
      }

      const newPassword = randomPassword(user.name.length)

      const mailOptions = {
        from: {
          name: 'Moodlegam Suporte',
          address: process.env.APP_ADDRESS,
        },
        to: email,
        subject: 'Recuperação de senha',
        html: `<p>Sua nova senha é <strong>${newPassword}</strong></p>`,
      }

      const hashedPassword = await hash(newPassword, 8)

      UserRepository.updateById(user.id, { password: hashedPassword })

      await transporter.sendMail(mailOptions)

      res.status(200).json({
        message: 'E-mail enviado com sucesso',
      })
    } catch (error) {
      return res.status(400).json({
        message: 'Erro no envio de e-mail',
        error: error.message,
      })
    }
  }
}
