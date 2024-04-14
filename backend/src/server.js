import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import userRoutes from './routes/UserRoutes.js'
import sessionsRouter from './routes/SessionsRoutes.js'
import apiKeyAuth from './middlewares/apiKeyAuth.js'
import mailRouter from './routes/ForgotPasswordRoutes.js'
import subjectRoutes from './routes/SubjectRoutes.js'
import pluginRouter from './routes/PluginRoutes.js'

const app = express()

const { MONGO_DATABASE } = process.env

connectDB(MONGO_DATABASE)

app.use(cors())
app.use(express.json())
app.use(apiKeyAuth)

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.status(201).json({
    message: 'Bem vindo',
  })
})

app.use('/users', userRoutes)
app.use('/sessions', sessionsRouter)
app.use('/mail', mailRouter)
app.use('/subject', subjectRoutes)
app.use('/plugins', pluginRouter)

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
