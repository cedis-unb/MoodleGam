import express from 'express'
import SessionsController from '../controllers/SessionsController.js'

const sessionsRouter = express.Router()

sessionsRouter.post('/', SessionsController.loginUser)

export default sessionsRouter
