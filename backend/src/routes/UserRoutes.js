import express from 'express'
import UserController from '../controllers/UserController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const userRoutes = express.Router()

userRoutes.get('/', isAuthenticated, UserController.getAllUsers)
userRoutes.get('/:id', isAuthenticated, UserController.getUserById)
userRoutes.post('/', UserController.createUser)
userRoutes.delete('/:id', isAuthenticated, UserController.deleteUser)
userRoutes.put('/:id', isAuthenticated, UserController.updateUser)

export default userRoutes
