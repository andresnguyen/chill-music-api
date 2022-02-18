import express from 'express'
const router = express.Router()
import SiteController from '../controllers/site.controller'

router.get('/home', SiteController.home)
router.get('/search', SiteController.search)
router.get('/personal', SiteController.personal)
router.get('/statistic', SiteController.statistic)
router.get('/top', SiteController.top)

router.get('/recent-song', SiteController.getRecentSong)
router.post('/recent-song', SiteController.createRecentSong)

router.get('/recent-album', SiteController.getRecentAlbum)
router.post('/recent-album', SiteController.createRecentAlbum)

router.get('/recent-playlist', SiteController.getRecentPlaylist)
router.post('/recent-playlist', SiteController.createRecentPlaylist)






export default router
