import SongService from '../services/song.service'
import { singleResponse, pluralResponse, failedResponse } from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class SongController {
  async getAll(req, res, next) {
    try {
      const data = await SongService.getAll(req.query)
      return res.status(OK).json({ ...pluralResponse, ...data })
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    const id = req.params.id
    try {
      const data = await SongService.getById(id)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async getRecommend(req, res, next) {
    const categoryId = req.params.categoryId
    try {
      const data = await SongService.getRecommend(categoryId)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async updateView(req, res, next) {
    const id = req.params.id
    try {
      const data = await SongService.updateView(id)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async songStatistic(req, res, next) {
    try {
      const data = await SongService.songStatistic()
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = await SongService.create({ ...req.body, userId: req.user._id })
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    const id = req.params.id
    try {
      const data = await SongService.update(id, req.body)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    const id = req.params.id
    try {
      const data = await SongService.delete(id)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      res.status(error.statusCode || INTERNAL_SERVER).json({
        ...failedResponse,
        message: error.message,
      })
    }
  }

  async getSongFromArray(req, res, next) {
    try {
      const data = await SongService.getSongFromArray(req.query.songIds)
      res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async getSongByArtistID(req, res, next) {
    try {
      const data = await SongService.getSongByArtistID(req.params.artistId)
      res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }
}

export default new SongController()
