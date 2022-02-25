import express from 'express'
const router = express.Router()
import AlbumController from '../controllers/album.controller'
import AuthMiddleware from '../middlewares/auth.middleware'


router.get('/', AlbumController.getAll)
router.get('/detail/:id', AlbumController.getDetail)
router.get('/:id', AlbumController.getById)
router.post('/', AuthMiddleware.checkLogin, AlbumController.create)
router.patch('/:id', AuthMiddleware.checkLogin, AlbumController.update)
router.delete('/:id', AuthMiddleware.checkLogin, AlbumController.delete)

export default router
