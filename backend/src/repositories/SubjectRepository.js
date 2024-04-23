import Subject from '../models/Subject.js'

const SubjectRepository = {
  findByCode: async code => {
    return await Subject.findOne({ subjectCode: code })
  },

  create: async data => {
    const subject = new Subject(data)
    return await subject.save()
  },

  findAll: async () => {
    return await Subject.find()
  },

  findById: async id => {
    return await Subject.findById(id)
  },

  updateById: async (id, data) => {
    return await Subject.findByIdAndUpdate(id, data, { new: true })
  },

  deleteById: async id => {
    return await Subject.findByIdAndDelete(id)
  },
}

export default SubjectRepository
