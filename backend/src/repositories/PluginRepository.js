import Plugin from '../models/Plugin.js'

const PluginRepository = {
  create: async data => {
    const plugin = new Plugin(data)
    return await plugin.save()
  },

  findAll: async () => {
    return await Plugin.find()
  },

  findById: async id => {
    return await Plugin.findById(id)
  },

  updateById: async (id, data) => {
    return await Plugin.findByIdAndUpdate(id, data, { new: true })
  },

  deleteById: async id => {
    return await Plugin.findByIdAndDelete(id)
  },
}

export default PluginRepository
