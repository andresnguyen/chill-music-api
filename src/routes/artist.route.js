import express from 'express'
const router = express.Router()
import ArtistController from '../controllers/artist.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

router.get('/', ArtistController.getAll)
router.get('/:id/detail', ArtistController.getDetail)
router.get('/:id', ArtistController.getById)
router.post('/', AuthMiddleware.checkLogin, ArtistController.create)
router.patch('/:id', AuthMiddleware.checkLogin, ArtistController.update)
router.delete('/:id', AuthMiddleware.checkLogin, ArtistController.delete)

export default router
