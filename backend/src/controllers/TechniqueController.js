import TechniqueRepository from '../repositories/TechniqueRepository.js'

const TechniqueController = {
  createTechnique: async (req, res) => {
    try {
      const { techniqueName, idCoreDrive } = req.body
      const newTechnique = await TechniqueRepository.create({
        techniqueName,
        idCoreDrive,
      })
      return res.status(201).json(newTechnique)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error creating technique: ' + error.message })
    }
  },

  getAllTechniques: async (req, res) => {
    try {
      const techniques = await TechniqueRepository.findAll()
      return res.status(200).json(techniques)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error fetching techniques: ' + error.message })
    }
  },

  getTechniqueById: async (req, res) => {
    try {
      const { id } = req.params
      const technique = await TechniqueRepository.findById(id)
      if (technique) {
        return res.status(200).json(technique)
      } else {
        return res.status(404).json({ message: 'Technique not found' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error fetching technique: ' + error.message })
    }
  },

  updateTechnique: async (req, res) => {
    try {
      const { id } = req.params
      const updatedTechnique = await TechniqueRepository.updateById(
        id,
        req.body
      )
      if (updatedTechnique) {
        return res.status(200).json(updatedTechnique)
      } else {
        return res.status(404).json({ message: 'Technique not found' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating technique: ' + error.message })
    }
  },

  deleteTechnique: async (req, res) => {
    try {
      const { id } = req.params
      const deletedTechnique = await TechniqueRepository.deleteById(id)
      if (deletedTechnique) {
        return res
          .status(200)
          .json({ message: 'Technique deleted successfully' })
      } else {
        return res.status(404).json({ message: 'Technique not found' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error deleting technique: ' + error.message })
    }
  },

  getTechniquesByCoreDriveId: async (req, res) => {
    try {
      const { coreDriveId } = req.params
      const techniques =
        await TechniqueRepository.findByCoreDriveId(coreDriveId)
      if (techniques.length > 0) {
        return res.status(200).json(techniques)
      } else {
        return res
          .status(404)
          .json({ message: 'No techniques found for the given core drive ID' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error fetching techniques: ' + error.message })
    }
  },
}

export default TechniqueController
