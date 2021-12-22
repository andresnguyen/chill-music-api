import User from '../models/user.model'
import { generateAccessToken } from '../utils/auth'
import { toDate } from '../utils/date'
import createError from 'http-errors'

class AuthService {
  async logIn(user) {
    try {
      const token = generateAccessToken(user._id)
      return { token, user }
    } catch (error) {
      throw error
    }
  }

  async register(data) {
    try {
      if (await User.findOne({ email: data.email })) {
        throw createError.BadRequest('Email already exists')
      }

      data.dateOfBirth = toDate(data.dateOfBirth)
      const user = await new User({ ...data }).save()
      const token = generateAccessToken(user._id)
      return { token, user }
    } catch (error) {
      throw error
    }
  }
}

export default new AuthService()
