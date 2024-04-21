import mongoose from 'mongoose'

const { Schema } = mongoose

const techniqueSchema = new Schema(
  {
    techniqueName: {
      type: String,
      required: true,
      minlength: 3,
    },
    idCoreDrive: {
      type: Schema.Types.ObjectId,
      ref: 'CoreDrive',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Technique = mongoose.model('Technique', techniqueSchema)

export default Technique
