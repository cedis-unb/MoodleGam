import PluginRepository from '../repositories/PluginRepository.js'

const PluginController = {
  createPlugin: async (req, res) => {
    try {
      const { pluginName } = req.body
      const newPlugin = await PluginRepository.create({ pluginName })
      return res.status(201).json(newPlugin)
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  },

  getAllPlugins: async (req, res) => {
    try {
      const plugins = await PluginRepository.findAll()
      return res.status(200).json(plugins)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  getPluginById: async (req, res) => {
    try {
      const { id } = req.params
      const plugin = await PluginRepository.findById(id)
      if (plugin) {
        return res.status(200).json(plugin)
      } else {
        return res.status(404).json({ message: 'Plugin not found' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  updatePlugin: async (req, res) => {
    try {
      const { id } = req.params
      const updatedPlugin = await PluginRepository.updateById(id, req.body)
      if (updatedPlugin) {
        return res.status(200).json(updatedPlugin)
      } else {
        return res.status(404).json({ message: 'Plugin not found' })
      }
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  },

  deletePlugin: async (req, res) => {
    try {
      const { id } = req.params
      const deletedPlugin = await PluginRepository.deleteById(id)
      if (deletedPlugin) {
        return res.status(200).json({ message: 'Plugin deleted successfully' })
      } else {
        return res.status(404).json({ message: 'Plugin not found' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
}

export default PluginController
