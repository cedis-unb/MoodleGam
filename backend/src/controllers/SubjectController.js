import SubjectRepository from '../repositories/SubjectRepository.js'

const SubjectController = {
  createSubject: async (req, res) => {
    try {
      const { subjectName, yearSemester, note, subjectCode, userId } = req.body

      const subjectExists = await SubjectRepository.findByCodeAndYearSemester(
        subjectCode,
        yearSemester
      )

      if (subjectExists) {
        return res.status(400).json({
          message: 'Disciplina já cadastrada.',
        })
      }

      const newSubject = await SubjectRepository.create({
        subjectName,
        yearSemester,
        note,
        subjectCode,
        userId,
      })

      return res.status(201).json(newSubject)
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  },

  getAllSubjects: async (req, res) => {
    try {
      const subjects = await SubjectRepository.findAll()
      return res.status(200).json(subjects)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  getSubjectById: async (req, res) => {
    try {
      const subject = await SubjectRepository.findById(req.params.id)
      if (subject) {
        return res.status(200).json(subject)
      } else {
        return res.status(404).json({ message: 'Disciplina não encontrada' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  updateSubject: async (req, res) => {
    try {
      const updatedSubject = await SubjectRepository.updateById(
        req.params.id,
        req.body
      )
      return res.status(200).json(updatedSubject)
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  },

  deleteSubject: async (req, res) => {
    try {
      const deletedSubject = await SubjectRepository.deleteById(req.params.id)
      if (deletedSubject) {
        return res
          .status(200)
          .json({ message: 'Disciplina excluída com sucesso' })
      } else {
        return res.status(404).json({ message: 'Disciplina não encontrada' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  findByUser: async (req, res) => {
    try {
      const subjects = await SubjectRepository.findByUserId(req.params.id)

      if (subjects.length > 0) {
        return res.status(200).json(subjects)
      } else {
        return res.status(404).json({
          message: 'Nenhuma disciplina encontrada',
        })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
}

export default SubjectController
