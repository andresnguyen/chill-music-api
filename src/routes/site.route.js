import express from 'express'
const router = express.Router()
import SiteController from '../controllers/site.controller'

router.get('/home', SiteController.home)
router.get('/personal', SiteController.personal)


export default router
