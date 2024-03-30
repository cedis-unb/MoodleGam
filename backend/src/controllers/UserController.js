import bcrypt from 'bcryptjs'
import UserRepository from '../repositories/UserRepository.js'

const { hash } = bcrypt

const UserController = {
  createUser: async (req, res) => {
    try {
      const { email, name, role, password, status } = req.body

      const userExists = await UserRepository.findByEmail(email)

      if (userExists) {
        return res.status(400).json({
          message: 'Email já cadastrado',
        })
      }

      const hashedPassword = await hash(password, 8)

      if (status) {
        const savedUser = await UserRepository.create({
          email,
          name,
          role,
          password: hashedPassword,
          status,
        })
        return res.status(201).json(savedUser)
      }

      const savedUser = await UserRepository.create({
        email,
        name,
        role,
        password: hashedPassword,
      })
      return res.status(201).json(savedUser)
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await UserRepository.findAll()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await UserRepository.findById(req.params.id)
      if (user) {
        return res.status(200).json(user)
      } else {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await UserRepository.updateById(
        req.params.id,
        req.body
      )
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await UserRepository.deleteById(req.params.id)
      if (deletedUser) {
        return res.status(200).json({ message: 'Usuário excluído com sucesso' })
      } else {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
}

export default UserController
