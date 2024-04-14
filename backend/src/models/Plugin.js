import mongoose from 'mongoose'

const { Schema } = mongoose

const pluginSchema = new Schema(
  {
    pluginName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Plugin = mongoose.model('Plugin', pluginSchema)

export default Plugin
