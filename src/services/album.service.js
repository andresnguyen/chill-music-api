import Album from '../models/album.model'
import Artist from '../models/artist.model'
import Category from '../models/category.model'
import SongService from './song.service'

class AlbumService {
  async getAll({ page = 1, limit = 20, q = '', categoryId, noArtist }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    if (categoryId) query.categoryId = categoryId.toString()
    try {
      const [data, count] = await Promise.all([
        Album.find(query)
          .skip(page * limit)
          .limit(limit)
          .lean(),
        Album.find(query).count(),
      ])

      const result = await Promise.all(data.map((item) => this.getByItem(item, noArtist)))

      return { data: result, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getByItem(item, noArtist) {
    const promiseList = noArtist
      ? [Category.findById(item.categoryId), Artist.findById(item.artistId)]
      : [
          Category.findById(item.categoryId),
          Artist.findById(item.artistId),
          SongService.getSongFromArray(item.songList),
        ]
    try {
      const [category, artist, songList] = await Promise.all(promiseList)

      if (noArtist)
        return {
          ...item,
          category,
          artist,
        }

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
        SongService.getSongFromArray(result.songList),
        Category.findById(result.categoryId),
        Artist.findById(result.artistId),
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

  async getAlbumFromArray(albumIdList) {
    const result = await Promise.all(albumIdList.map((albumId) => this.getById(albumId)))
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
