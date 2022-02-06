import Playlist from '../models/playlist.model'

class PlaylistService {
  async getAll({ page = 0, limit = 20, q = '' }) {
    page = Number.parseInt(page)
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    try {
      const data = await Playlist.find(query)
        .skip(page * limit)
        .limit(limit)
        .lean()
      const count = await Playlist.find(query).count()
      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await Playlist.findById(id).lean()
      return result
    } catch (error) {
      throw error
    }
  }

  async create(user, data) {
    try {
      const result = await new Playlist({ ...data, userId: user._id.toString() }).save()
      return result
    } catch (error) {
      throw error
    }
  }

  async update(id, data) {
    try {
      const result = await Playlist.findByIdAndUpdate(id, data, {
        new: true,
      })
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const result = await Playlist.findByIdAndDelete(id)
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteSoft(id) {
    try {
      const result = await Playlist.findByIdAndDelete(id)
      result.isDelete = 1
      await result.save()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new PlaylistService()
