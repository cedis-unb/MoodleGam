import CoreDriveRepository from '../repositories/CoreDriveRepository.js'

const CoreDriveController = {
  createCoreDrive: async (req, res) => {
    try {
      const { role, coreDriveName, motivation, hat } = req.body
      const newCoreDrive = await CoreDriveRepository.create({
        role,
        coreDriveName,
        motivation,
        hat,
      })
      return res.status(201).json(newCoreDrive)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error creating core drive: ' + error.message })
    }
  },

  getAllCoreDrives: async (req, res) => {
    try {
      const coreDrives = await CoreDriveRepository.findAll()
      return res.status(200).json(coreDrives)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error fetching core drives: ' + error.message })
    }
  },

  getCoreDriveById: async (req, res) => {
    try {
      const { id } = req.params
      const coreDrive = await CoreDriveRepository.findById(id)
      if (coreDrive) {
        return res.status(200).json(coreDrive)
      } else {
        return res.status(404).json({ message: 'Core drive not found' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error fetching core drive: ' + error.message })
    }
  },

  updateCoreDrive: async (req, res) => {
    try {
      const { id } = req.params
      const updatedCoreDrive = await CoreDriveRepository.updateById(
        id,
        req.body
      )
      if (updatedCoreDrive) {
        return res.status(200).json(updatedCoreDrive)
      } else {
        return res.status(404).json({ message: 'Core drive not found' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating core drive: ' + error.message })
    }
  },

  deleteCoreDrive: async (req, res) => {
    try {
      const { id } = req.params
      const deletedCoreDrive = await CoreDriveRepository.deleteById(id)
      if (deletedCoreDrive) {
        return res
          .status(200)
          .json({ message: 'Core drive deleted successfully' })
      } else {
        return res.status(404).json({ message: 'Core drive not found' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error deleting core drive: ' + error.message })
    }
  },
}

export default CoreDriveController
