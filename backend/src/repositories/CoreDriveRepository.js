import CoreDrive from '../models/CoreDrive.js'

const CoreDriveRepository = {
  create: async data => {
    try {
      const coreDrive = new CoreDrive(data)
      await coreDrive.save()
      return coreDrive
    } catch (error) {
      throw new Error('Error creating core drive: ' + error.message)
    }
  },

  findAll: async () => {
    try {
      return await CoreDrive.find()
    } catch (error) {
      throw new Error('Error finding core drives: ' + error.message)
    }
  },

  findById: async id => {
    try {
      return await CoreDrive.findById(id)
    } catch (error) {
      throw new Error('Error finding core drive: ' + error.message)
    }
  },

  updateById: async (id, data) => {
    try {
      return await CoreDrive.findByIdAndUpdate(id, data, { new: true })
    } catch (error) {
      throw new Error('Error updating core drive: ' + error.message)
    }
  },

  deleteById: async id => {
    try {
      return await CoreDrive.findByIdAndDelete(id)
    } catch (error) {
      throw new Error('Error deleting core drive: ' + error.message)
    }
  },

  findByMotivation: async motivation => {
    try {
      return await CoreDrive.find({ motivation: motivation })
    } catch (error) {
      throw new Error(
        'Error finding core drives by motivation: ' + error.message
      )
    }
  },
}

export default CoreDriveRepository
