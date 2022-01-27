import createError from 'http-errors'
import { UNAUTHORIZED } from '../constants/httpStatusCode.constant'
import privateRoutes from '../constants/privateRoutes'
import User from '../models/user.model'
import { verifyAccessToken } from '../utils/auth'

class AuthMiddleware {
  async verifyUser(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    try {
      if (token == null) {
        throw createError.Unauthorized('Token is empty')
      }

      const { id } = await verifyAccessToken(token)
      const user = await User.findById(id)
      if (!user) {
        throw createError.BadRequest("User doesn't exists")
      }

      if (user.isActive) {
        throw createError.NotAcceptable("User isn't active")
      }

      req.user = user
      next()
    } catch (error) {
      next()
      return
      privateRoutes.forEach((privateRoute) => {
        if (req.originalUrl.indexOf(privateRoute) === 4) {
          error.status = error.status || UNAUTHORIZED
          next(error)
          return
        }
      })
    }
  }

  async verifyPermission(req, res, next) {
    const user = req.user
    try {
      if (user.role < 1) {
        throw createError.Forbidden('Forbidden')
      }
    } catch (error) {
      next(error)
    }
  }
}

export default new AuthMiddleware()
