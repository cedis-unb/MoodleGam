import bcrypt from 'bcryptjs'
import UserRepository from '../repositories/UserRepository.js'

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

      return res.status(200).json({
        message: 'Login bem-sucedido',
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
          status: user.status,
        },
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
}

export default SessionsController
