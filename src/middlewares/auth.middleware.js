import createError from 'http-errors'
import { verifyAccessToken } from '../utils/auth'

class AuthMiddleware {
  async verifyUser(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    try {
      if (token == null) {
        throw createError.Unauthorized('Token is empty')
      }

      const user = await verifyAccessToken(token)

      if (!user) {
        throw createError.BadRequest("User doesn't exists")
      }

      if (!user.isActive) {
        throw createError.NotAcceptable("User isn't active")
      }

      req.user = user
      next()
    } catch (error) {
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

  async checkLogin(req, res, next) {
    if (!req.user) {
      next(createError.Unauthorized('Unauthorized'))
      return
    }
    next()
  }
}

export default new AuthMiddleware()
