import express from 'express'
const router = express.Router()
import CommentController from '../controllers/comment.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

router.get('/', CommentController.getAll)
router.post('/', AuthMiddleware.checkLogin, CommentController.create)
router.patch('/:id', AuthMiddleware.checkLogin, CommentController.update)
router.delete('/:id', AuthMiddleware.checkLogin, CommentController.delete)

export default router
