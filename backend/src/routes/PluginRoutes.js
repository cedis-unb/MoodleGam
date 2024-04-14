import express from 'express'
import PluginController from '../controllers/PluginController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const pluginRouter = express.Router()

pluginRouter.get('/', isAuthenticated, PluginController.getAllPlugins)
pluginRouter.get('/:id', isAuthenticated, PluginController.getPluginById)
pluginRouter.post('/', isAuthenticated, PluginController.createPlugin)
pluginRouter.delete('/:id', isAuthenticated, PluginController.deletePlugin)
pluginRouter.put('/:id', isAuthenticated, PluginController.updatePlugin)

export default pluginRouter
