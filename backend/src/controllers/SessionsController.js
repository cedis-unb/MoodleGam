import bcrypt from 'bcryptjs'
import UserRepository from '../repositories/UserRepository.js'
import jwt from 'jsonwebtoken'

const SessionsController = {
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body

      const user = await UserRepository.findByEmail(email)
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ message: 'Email/Senha inválida' })
      }

      if (user.status === 'inactive') {
        return res.status(400).json({
          message: 'Esse usuário foi desativado pelo admin do sistema.',
        })
      }

      const token = jwt.sign({}, process.env.JWT_SECRET, {
        subject: user.id,
        expiresIn: '1d',
      })

      return res.status(200).json({
        message: 'Login bem-sucedido',
        token,
        user,
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
  showProfile: async (req, res) => {
    try {
      const authHeader = req.headers.authorization

      const [, token] = authHeader.split(' ')

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

      const { sub } = decodedToken

      const user = await UserRepository.findById(sub)

      if (!user) {
        return res.status(400).json({
          message: 'Erro ao buscar usuário!',
        })
      }

      return res.status(200).json({
        user,
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
}

export default SessionsController
