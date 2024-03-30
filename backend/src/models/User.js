import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
    },
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Por favor, insira um e-mail válido'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
