import PluginRepository from '../repositories/PluginRepository.js'
import TechniqueRepository from '../repositories/TechniqueRepository.js'

const PluginController = {
  createPlugin: async (req, res) => {
    try {
      const { pluginName, techniques } = req.body

      if (techniques && !Array.isArray(techniques)) {
        return res
          .status(400)
          .json({ message: 'Techniques must be an array of IDs' })
      }

      const newPlugin = await PluginRepository.create({
        pluginName,
        techniques,
      })

      return res.status(201).json(newPlugin)
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Error creating plugin: ' + error.message })
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

  addTechniqueToPlugin: async (req, res) => {
    try {
      const { techniqueId } = req.body
      const { pluginId } = req.params

      const plugin = await PluginRepository.findById(pluginId)
      const technique = await TechniqueRepository.findById(techniqueId)

      if (!plugin || !technique) {
        return res.status(404).json({
          message: 'Error ao encontrar plugin ou technique',
        })
      }

      const updatedPlugin = await PluginRepository.addTechniqueToPlugin(
        pluginId,
        techniqueId
      )

      return res.status(200).json(updatedPlugin)
    } catch (error) {
      return res.status(500).json({
        message: 'Error ao adicionar técnica ao plugin' + error.message,
      })
    }
  },
}

export default PluginController
