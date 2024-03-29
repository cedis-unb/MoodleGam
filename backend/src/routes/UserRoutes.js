import express from 'express'
import UserController from '../controllers/UserController.js'

const userRoutes = express.Router()

userRoutes.get('/', UserController.getAllUsers)
userRoutes.get('/:id', UserController.getUserById)
userRoutes.post('/', UserController.createUser)
userRoutes.delete('/:id', UserController.deleteUser)
userRoutes.put('/:id', UserController.updateUser)

export default userRoutes
