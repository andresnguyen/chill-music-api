import express from 'express'
const router = express.Router()
import SongController from '../controllers/song.controller'

router.get('/', SongController.getAll)
router.get('/song-recommend/:categoryId', SongController.getRecommend)
router.get('/song-view/:id', SongController.updateView)
router.get('/song-statistic', SongController.songStatistic)
router.get('/from-array', SongController.getSongFromArray)
router.get('/from-artist/:artistId', SongController.getSongByArtistID)
router.get('/:id', SongController.getById)
router.post('/', SongController.create)
router.patch('/:id', SongController.update)
router.delete('/:id', SongController.delete)



export default router
