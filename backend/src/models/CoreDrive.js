import mongoose from 'mongoose'

const { Schema } = mongoose

const coreDriveSchema = new Schema(
  {
    coreDriveName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    motivation: {
      type: String,
      required: true,
      enum: ['intrinsic', 'extrinsic'],
    },
    hat: {
      type: String,
      required: true,
      enum: ['black', 'white'],
    },
  },
  {
    timestamps: true,
  }
)

const CoreDrive = mongoose.model('CoreDrive', coreDriveSchema)

export default CoreDrive
