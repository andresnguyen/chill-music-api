import User from '../models/user.model'
import { encodePassword } from '../utils/auth'
import { toDate } from '../utils/date'

class UserService {
  async getAll({ page = 1, limit = 20, q = '' }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    try {
      const data = await User.find(query)
        .skip(page * limit)
        .limit(limit)
        .lean()
      const count = await User.find(query).count()
      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await User.findById(id).lean()
      return result
    } catch (error) {
      throw error
    }
  }

  async create(data) {
    try {
      data.dateOfBirth = toDate(data.dateOfBirth)
      const result = await new User({
        ...data,
      }).save()
      delete result._doc.password
      return result
    } catch (error) {
      throw error
    }
  }

  async update(id, data) {
    try {
      if (data.dateOfBirth) {
        data.dateOfBirth = toDate(data.dateOfBirth)
      }

      if (data.password) {
        data.password = await encodePassword(data.password)
      }

      const result = await User.findByIdAndUpdate(id, data, {
        new: true,
      })
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const result = await User.findByIdAndDelete(id)
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteSoft(id) {
    try {
      const result = await User.findById(id)
      result.isDelete = 1
      await result.save()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()
