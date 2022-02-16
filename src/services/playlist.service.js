import Playlist from '../models/playlist.model'
import Category from '../models/category.model'
import Artist from '../models/artist.model'
import SongService from '../services/song.service'


class PlaylistService {
  async getAll({ page = 1, limit = 20, q = '' }) {
    page = Number.parseInt(page) - 1
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
      const result = await new Playlist({ ...data}).save()
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
