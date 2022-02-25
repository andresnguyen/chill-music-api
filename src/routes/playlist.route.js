import express from 'express'
const router = express.Router()
import PlaylistController from '../controllers/playlist.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

router.get('/', PlaylistController.getAll)
router.get('/detail/:id', PlaylistController.getDetail)
router.get('/:id', PlaylistController.getById)
router.post('/', AuthMiddleware.checkLogin, PlaylistController.create)
router.patch('/:id', AuthMiddleware.checkLogin, PlaylistController.update)
router.delete('/:id', AuthMiddleware.checkLogin, PlaylistController.delete)

export default router
