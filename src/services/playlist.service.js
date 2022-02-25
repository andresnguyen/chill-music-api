import Playlist from '../models/playlist.model'
import Category from '../models/category.model'
import Artist from '../models/artist.model'
import SongService from '../services/song.service'

class PlaylistService {
  async getAll({ page = 1, limit = 20, q = '', categoryId, isActive }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    try {
      if (categoryId) query.categoryId = categoryId
      if (isActive) query.isActive = isActive === 'false' ? false : true
      const [data, count] = await Promise.all([
        Playlist.find(query)
          .skip(page * limit)
          .limit(limit)
          .lean(),
        Playlist.find(query).count(),
      ])
      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await Playlist.findById(id).lean()
      if (!result) return null
      const [songList, category, artist] = await Promise.all([
        SongService.getSongFromArray(result.songList),
        Category.findById(result.categoryId),
      ])

      return {
        ...result,
        songList,
        category,
        artist,
      }
    } catch (error) {
      throw error
    }
  }

  async getDetail(id) {
    try {
      const result = await Playlist.findById(id).lean()
      if (!result) return null
      const [category, artist] = await Promise.all([
        Category.findById(result.categoryId),
        Artist.findById(result.artistId),
      ])

      return {
        ...result,
        category,
        artist,
      }
    } catch (error) {
      throw error
    }
  }

  async create(user, data) {
    try {
      const result = await new Playlist({ ...data, userId: user._id }).save()
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
    console.log(id)
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
