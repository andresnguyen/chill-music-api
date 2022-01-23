import express from 'express'
const router = express.Router()
import SiteController from '../controllers/site.controller'

router.get('/home', SiteController.home)

export default router
