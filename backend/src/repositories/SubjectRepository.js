import Subject from '../models/Subject.js'

const SubjectRepository = {
  findByCode: async code => {
    return await Subject.findOne({ subjectCode: code })
  },

  findByUserId: async userId => {
    return await Subject.find({ userId })
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

  findByCodeAndYearSemester: async (subjectCode, yearSemester) => {
    return await Subject.findOne({ subjectCode, yearSemester })
  },

  addTechniqueToSubject: async (subjectId, techniqueId) => {
    try {
      const updatedSubject = await Subject.findByIdAndUpdate(
        subjectId,
        { $addToSet: { techniques: techniqueId } },
        { new: true, safe: true, upsert: false }
      )

      return updatedSubject
    } catch (error) {
      throw new Error(
        'Não foi possível adicionar a técnica a disciplina: ' + error.message
      )
    }
  },
}

export default SubjectRepository
