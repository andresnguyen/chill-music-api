import { OK } from '../constants/httpStatusCode.constant'
import { pluralResponse, singleResponse } from '../constants/response.constant'
import SiteService from '../services/site.service'
class SiteController {
  async home(req, res, next) {
    try {
      const data = req.user ? await SiteService.loginHome(req.user) : await SiteService.home()
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async search(req, res, next) {
    try {
      const data = await SiteService.search(req.query)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async personal(req, res, next) {
    try {
      const data = await SiteService.personal()
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async statistic(req, res, next) {
    try {
      const data = await SiteService.statistic()
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async top(req, res, next) {
    try {
      const data = await SiteService.top(req.query)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async getRecentSong(req, res, next) {
    try {
      const data = await SiteService.getRecentSong(req.user)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async createRecentSong(req, res, next) {
    try {
      const data = await SiteService.createRecentSong(req.user, req.body.songId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async getRecentPlaylist(req, res, next) {
    try {
      const data = await SiteService.getRecentPlaylist(req.user)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async createRecentPlaylist(req, res, next) {
    try {
      const data = await SiteService.createRecentPlaylist(req.user, req.body.playlistId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async getRecentAlbum(req, res, next) {
    try {
      const data = await SiteService.getRecentAlbum(req.user)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async createRecentAlbum(req, res, next) {
    try {
      const data = await SiteService.createRecentAlbum(req.user, req.body.albumId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }
}

export default new SiteController()
