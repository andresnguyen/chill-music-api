import { OK } from '../constants/httpStatusCode.constant'
import { pluralResponse } from '../constants/response.constant'
import SiteService from '../services/site.service'
class SiteController {
  async home(req, res, next) {
    try {
      const data = await SiteService.home()
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
}

export default new SiteController()
