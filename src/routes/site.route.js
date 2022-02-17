import express from 'express'
const router = express.Router()
import SiteController from '../controllers/site.controller'

router.get('/home', SiteController.home)
router.get('/search', SiteController.search)
router.get('/personal', SiteController.personal)
router.get('/statistic', SiteController.statistic)
router.get('/top', SiteController.top)




export default router
