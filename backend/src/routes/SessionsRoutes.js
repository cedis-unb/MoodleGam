import express from 'express'
import SessionsController from '../controllers/SessionsController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const sessionsRouter = express.Router()

sessionsRouter.post('/', SessionsController.loginUser)
sessionsRouter.get('/', isAuthenticated, SessionsController.showProfile)

export default sessionsRouter
