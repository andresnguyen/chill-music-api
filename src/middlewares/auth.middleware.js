import { verifyAccessToken } from '../utils/auth'
import User from '../models/user.model'
import privateRoutes from '../constants/privateRoutes'
import { FORBIDDEN, UNAUTHORIZED } from '../constants/httpStatusCode.constant'
import createError from 'http-errors'

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
      privateRoutes.forEach((privateRoute) => {
        if (req.originalUrl.indexOf(privateRoute) === 4) {
          error.status = error.status || UNAUTHORIZED
          next(error)
          return
        }
      })
      next()
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
