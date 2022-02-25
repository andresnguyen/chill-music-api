import { OK } from '../constants/httpStatusCode.constant'
import { pluralResponse, singleResponse } from '../constants/response.constant'
import CommentService from '../services/comment.service'

class CommentController {
  async getAll(req, res, next) {
    try {
      const data = await CommentService.getAll(req.query)
      return res.status(OK).json({ ...pluralResponse, ...data })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = await CommentService.create(req.user._id, req.body)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    const id = req.params.id
    try {
      const data = await CommentService.update(id, req.body)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    const id = req.params.id
    try {
      const data = await CommentService.delete(req.user._id, id)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }
}

export default new CommentController()
