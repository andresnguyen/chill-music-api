import { OK } from '../constants/httpStatusCode.constant'
import { singleResponse } from '../constants/response.constant'
import AuthService from '../services/auth.service'

class AuthController {
  async logIn(req, res, next) {
    try {
      const data = await AuthService.logIn(req.user)
      res.status(OK).json({
        ...singleResponse,
        data,
      })
    } catch (error) {
      next(error)
    }
  }

  async register(req, res, next) {
    try {
      const data = await AuthService.register(req.body)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }
}

export default new AuthController()
