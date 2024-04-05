import express from 'express'
import MailController from '../controllers/MailController.js'

const mailRouter = express.Router()

mailRouter.post('/', MailController.sendEmailForgotPassword)

export default mailRouter
