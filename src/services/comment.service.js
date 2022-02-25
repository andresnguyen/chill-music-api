import userAPI from '../api/userAPI'
import CommentSong from '../models/comment.model'

class CommentService {
  async getAll({ songId, page = 1, limit = 20 }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    try {
      let [data, count] = await Promise.all([
        CommentSong.find({ songId })
          .skip(page * limit)
          .limit(limit)
          .sort({ createdAt: -1 })
          .lean(),
        CommentSong.find({ songId }).count(),
      ])

      data = await Promise.all(
        data.map(async (item) => ({
          user: (await userAPI.getById(item.userId)).data,
          ...item,
        }))
      )

      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async create(userId, data) {
    try {
      const result = await new CommentSong({ userId, ...data }).save()
      return result
    } catch (error) {
      throw error
    }
  }

  async update(userId, data) {
    try {
      const result = await CommentSong.findOneAndUpdate(
        {
          _id: data._id,
          userId,
        },
        data,
        {
          new: true,
        }
      )
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(userId, id) {
    try {
      const result = await CommentSong.findOneAndDelete({
        _id: id,
        userId,
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new CommentService()
