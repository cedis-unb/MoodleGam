import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import connectDB from './config/db.js'
import userRoutes from './routes/UserRoutes.js'
import sessionsRouter from './routes/SessionsRoutes.js'

const app = express()

const { MONGO_DATABASE } = process.env

connectDB(MONGO_DATABASE)

app.use(express.json())

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.status(201).json({
    message: 'Bem vindo',
  })
})

app.use('/users', userRoutes)
app.use('/sessions', sessionsRouter)

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
