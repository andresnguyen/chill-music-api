import express from 'express'
const router = express.Router()
import CategoryController from '../controllers/category.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

router.get('/', CategoryController.getAll)
router.get('/:id', CategoryController.getById)
router.post('/', AuthMiddleware.checkLogin, CategoryController.create)
router.patch('/:id', AuthMiddleware.checkLogin, CategoryController.update)
router.delete('/:id', AuthMiddleware.checkLogin, CategoryController.delete)

export default router
