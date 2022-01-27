import { OK } from '../constants/httpStatusCode.constant'
import { pluralResponse, singleResponse } from '../constants/response.constant'
import CategoryService from '../services/category.service'

class CategoryController {
  async getAll(req, res, next) {
    try {
      const data = await CategoryService.getAll(req.query)
      return res.status(OK).json({ ...pluralResponse, ...data })
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    const id = req.params.id
    try {
      const data = await CategoryService.getById(id)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = await CategoryService.create(req.body)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    const id = req.params.id
    try {
      const data = await CategoryService.update(id, req.body)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    const id = req.params.id
    try {
      const data = await CategoryService.delete(id)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }
}

export default new CategoryController()
