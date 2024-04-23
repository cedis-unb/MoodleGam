import mongoose from 'mongoose'

const { Schema } = mongoose

const subjectSchema = new Schema(
  {
    subjectName: {
      type: String,
      required: true,
      minlength: 3,
    },
    yearSemester: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
    subjectCode: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Subject = mongoose.model('Subject', subjectSchema)

export default Subject
