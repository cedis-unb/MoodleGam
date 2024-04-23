import express from 'express'
import PluginController from '../controllers/PluginController.js'

const pluginRouter = express.Router()

pluginRouter.get('/', PluginController.getAllPlugins)
pluginRouter.get('/:id', PluginController.getPluginById)
pluginRouter.post('/', PluginController.createPlugin)
pluginRouter.delete('/:id', PluginController.deletePlugin)
pluginRouter.put('/:id', PluginController.updatePlugin)
pluginRouter.patch('/:pluginId', PluginController.addTechniqueToPlugin)

export default pluginRouter
