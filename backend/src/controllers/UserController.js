import User from '../models/User.js' // Assumindo que seu modelo de usuário está em '../models/User.js'

const UserController = {
  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body)
      const savedUser = await newUser.save()
      res.status(201).json(savedUser)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id)
      if (deletedUser) {
        res.status(200).json({ message: 'Usuário excluído com sucesso' })
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}

export default UserController
