import express from 'express'
import CoreDriveController from '../controllers/CoreDriveController.js'

const coreDriveRoutes = express.Router()

coreDriveRoutes.post('/', CoreDriveController.createCoreDrive)
coreDriveRoutes.get('/', CoreDriveController.getAllCoreDrives)
coreDriveRoutes.delete('/:id', CoreDriveController.deleteCoreDrive)
coreDriveRoutes.put('/:id', CoreDriveController.updateCoreDrive)
coreDriveRoutes.get('/:id', CoreDriveController.getCoreDriveById)

export default coreDriveRoutes
