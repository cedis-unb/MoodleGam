import Technique from '../models/Technique.js'

const TechniqueRepository = {
  create: async data => {
    try {
      const technique = new Technique(data)
      await technique.save()
      return technique
    } catch (error) {
      throw new Error('Error creating technique: ' + error.message)
    }
  },

  findAll: async () => {
    try {
      return await Technique.find()
    } catch (error) {
      throw new Error('Error finding techniques: ' + error.message)
    }
  },

  findById: async id => {
    try {
      return await Technique.findById(id)
    } catch (error) {
      throw new Error('Error finding technique: ' + error.message)
    }
  },

  updateById: async (id, data) => {
    try {
      return await Technique.findByIdAndUpdate(id, data, { new: true })
    } catch (error) {
      throw new Error('Error updating technique: ' + error.message)
    }
  },

  deleteById: async id => {
    try {
      return await Technique.findByIdAndDelete(id)
    } catch (error) {
      throw new Error('Error deleting technique: ' + error.message)
    }
  },

  findByCoreDriveId: async coreDriveId => {
    try {
      return await Technique.find({ idCoreDrive: coreDriveId })
    } catch (error) {
      throw new Error(
        'Error finding techniques by core drive id: ' + error.message
      )
    }
  },
}

export default TechniqueRepository
