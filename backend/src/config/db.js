import mongoose from 'mongoose'

// eslint-disable-next-line prettier/prettier
const connectDB = async MONGO_DATABASE => {
  try {
    await mongoose.connect(MONGO_DATABASE)

    console.log('Conectado ao MongoDB...')
  } catch (error) {
    console.error('Não foi possível conectar ao mongo', error.message)
  }
}

export default connectDB
