import express from 'express'
const router = express.Router()
import SongController from '../controllers/song.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

router.get('/', SongController.getAll)
router.get('/song-recommend/:categoryId', SongController.getRecommend)
router.get('/song-view/:id', SongController.updateView)
router.get('/song-statistic', SongController.songStatistic)
router.get('/from-array', SongController.getSongFromArray)
router.get('/from-artist/:artistId', SongController.getSongByArtistID)
router.get('/:id', SongController.getById)
router.post('/', AuthMiddleware.checkLogin, SongController.create)
router.patch('/:id', AuthMiddleware.checkLogin, SongController.update)
router.delete('/:id', AuthMiddleware.checkLogin, SongController.delete)

export default router
