import express from 'express'
const router = express.Router()
import CategoryController from '../controllers/category.controller'

router.get('/', CategoryController.getAll)
router.get('/:id', CategoryController.getById)
router.post('/', CategoryController.create)
router.patch('/:id', CategoryController.update)
router.delete('/:id', CategoryController.delete)

export default router
