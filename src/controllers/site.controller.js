import { OK } from '../constants/httpStatusCode.constant'
import { pluralResponse } from '../constants/response.constant'

class SiteController {
  async home(req, res, next) {
    try {
      const data = await SiteService.getHomeData()
      return res.status(OK).json({ ...pluralResponse, ...data })
    } catch (error) {
      next(error)
    }
  }
}

export default new SiteController()
