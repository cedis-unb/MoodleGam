import express from 'express'
import TechniqueController from '../controllers/TechniqueController.js'

const techniqueRoutes = express.Router()

techniqueRoutes.get('/', TechniqueController.getAllTechniques)
techniqueRoutes.get('/:id', TechniqueController.getTechniqueById)
techniqueRoutes.post('/', TechniqueController.createTechnique)
techniqueRoutes.delete('/:id', TechniqueController.deleteTechnique)
techniqueRoutes.put('/:id', TechniqueController.updateTechnique)
techniqueRoutes.get(
  '/getByCoreDrive/:id',
  TechniqueController.getTechniquesByCoreDriveId
)

export default techniqueRoutes
