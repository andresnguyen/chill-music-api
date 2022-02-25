import express from 'express'
const router = express.Router()
import SiteController from '../controllers/site.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

router.get('/home', SiteController.home)
router.get('/search', SiteController.search)
router.get('/personal', SiteController.personal)
router.get('/statistic', SiteController.statistic)
router.get('/top', SiteController.top)

router.get('/recent-song', AuthMiddleware.checkLogin, SiteController.getRecentSong)
router.post('/recent-song', AuthMiddleware.checkLogin, SiteController.createRecentSong)

router.get('/recent-album', AuthMiddleware.checkLogin, SiteController.getRecentAlbum)
router.post('/recent-album', AuthMiddleware.checkLogin, SiteController.createRecentAlbum)

router.get('/recent-playlist', AuthMiddleware.checkLogin, SiteController.getRecentPlaylist)
router.post('/recent-playlist', AuthMiddleware.checkLogin, SiteController.createRecentPlaylist)

export default router
