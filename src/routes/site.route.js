import express from 'express'
const router = express.Router()
import SiteController from '../controllers/site.controller'

router.get('/home', SiteController.getHome)

export default router
