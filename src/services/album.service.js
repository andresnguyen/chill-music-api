import Album from '../models/album.model'
import Artist from '../models/artist.model'
import Category from '../models/category.model'
import SongService from './song.service'

class AlbumService {
  async getAll({ page = 1, limit = 20, q = '' }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    try {
      const data = await Album.find(query)
        .skip(page * limit)
        .limit(limit)
        .lean()

      const result = await Promise.all(
        data.map(async (item) => await this.getByItem(item))
      )

      const count = await Album.find(query).count()
      return { data: result, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getByItem(item) {
    try {
      const [songList, category, artist] = await Promise.all([
        await SongService.getSongFromArray(item.songList),
        await Category.findById(item.categoryId),
        await Artist.findById(item.artistId),
      ])

      return {
        ...item,
        songList,
        category,
        artist,
      }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await Album.findById(id).lean()
      const [songList, category, artist] = await Promise.all([
        await SongService.getSongFromArray(result.songList),
        await Category.findById(result.categoryId),
        await Artist.findById(result.artistId),
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
      const result = await Album.findById(id).lean()
      const [category, artist] = await Promise.all([
        await Category.findById(result.categoryId),
        await Artist.findById(result.artistId),
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

  async getSongFromArray(albumIdList) {
    const result = Promise.all(albumIdList.map(async (albumId) => await this.getById(albumId)))
    return result
  }

  async create(data) {
    try {
      const result = await new Album({ ...data }).save()
      return result
    } catch (error) {
      throw error
    }
  }

  async update(id, data) {
    try {
      const result = await Album.findByIdAndUpdate(id, data, {
        new: true,
      })
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const result = await Album.findByIdAndDelete(id)
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteSoft(id) {
    try {
      const result = await Album.findByIdAndDelete(id)
      result.isDelete = 1
      await result.save()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new AlbumService()
