import Song from '../models/song.model'
import Artist from '../models/artist.model'
import createError from 'http-errors'
import Category from '../models/category.model'

class SongService {
  async getAll({ page = 1, limit = 20, q = '', categoryId, select }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}

    if (categoryId) query.categoryId = categoryId

    try {
      let [data, count] = await Promise.all([
        Song.find(query)
          .skip(page * limit)
          .limit(limit)
          .lean(),
        Song.find(query).count(),
      ])

      if (!select) {
        data = await this.getSongFromArraySong(data)
      }

      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(songId) {
    try {
      const result = await Song.findById(songId).lean()

      const [artistList, category] = await Promise.all([
        Artist.find({ _id: { $in: result.artistList } }),
        Category.findById(result.categoryId),
      ])

      return {
        ...result,
        artistList,
        artistIdList: result.artistList,
        category,
      }
    } catch (error) {
      throw error
    }
  }

  async getBySong(song) {
    try {
      const [artistList, category] = await Promise.all([
        Artist.find({ _id: { $in: song.artistList } }),
        Category.findById(song.categoryId),
        // get user
      ])
      return {
        ...song,
        artistList,
        category,
      }
    } catch (error) {
      throw error
    }
  }

  async create(data) {
    try {
      const result = await new Song({ ...data }).save()
      return result
    } catch (error) {
      throw error
    }
  }

  async update(id, data) {
    try {
      const result = await Song.findByIdAndUpdate(id, data, {
        new: true,
      })
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const result = await Song.findByIdAndDelete(id)
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteSoft(id) {
    try {
      const result = await Song.findByIdAndUpdate(id, { isDelete: true })
      if (!result) {
        throw new createError.BadRequest("Song doesn't exist")
      }

      return true
    } catch (error) {
      throw error
    }
  }

  async getSongFromArray(songIdList) {
    try {
      const result = await Promise.all(songIdList.map((songId) => this.getById(songId?.toString())))

      return result
    } catch (error) {
      throw error
    }
  }

  async getSongFromArraySong(songList) {
    try {
      const result = await Promise.all(songList.map((song) => this.getBySong(song)))
      return result
    } catch (error) {
      throw error
    }
  }

  async getSongByArtistID(artistId) {
    try {
      const songList = await Song.find({
        artistList: artistId.toString(),
      }).lean()

      if (songList.length === 0) return []

      const result = await this.getSongFromArraySong(songList)
      return result
    } catch (error) {
      throw error
    }
  }

  async getSongByQuery(query) {
    try {
      const songList = await Song.find(query).lean()

      if (songList.length === 0) return []

      const result = await this.getSongFromArraySong(songList)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new SongService()
