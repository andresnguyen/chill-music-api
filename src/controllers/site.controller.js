import { OK } from '../constants/httpStatusCode.constant'
import { pluralResponse } from '../constants/response.constant'

class SiteController {
  async home(req, res, next) {
    try {
      res.status(OK).json({ ...pluralResponse })
    } catch (error) {
      next(error)
    }
  }
}

export default new SiteController()
