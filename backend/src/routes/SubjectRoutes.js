import express from 'express'
import SubjectController from '../controllers/SubjectController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const subjectRoutes = express.Router()

subjectRoutes.get('/', isAuthenticated, SubjectController.getAllSubjects)
subjectRoutes.get('/:id', isAuthenticated, SubjectController.getSubjectById)
subjectRoutes.get('/user/:id', isAuthenticated, SubjectController.findByUser)
subjectRoutes.post('/', isAuthenticated, SubjectController.createSubject)
subjectRoutes.delete('/:id', isAuthenticated, SubjectController.deleteSubject)
subjectRoutes.put('/:id', isAuthenticated, SubjectController.updateSubject)

export default subjectRoutes
