import Song from '../models/song.model'
import Artist from '../models/artist.model'
import createError from 'http-errors'

class SongService {
  async getAll({ page = 0, limit = 20, q = '', categoryId }) {
    page = Number.parseInt(page)
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i'), categoryId } : {}
    try {
      const data = await Song.find(query)
        .skip(page * limit)
        .limit(limit)
      const count = await Song.find(query).count()
      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(songId) {
    try {
      const result = await Song.findById(songId).lean()
      const artistList = await Artist.find({ _id: { $in: result.artistList } })
      return {
        ...result,
        artistList,
      }
    } catch (error) {
      throw error
    }
  }

  async create(data) {
    try {
      let {
        body: { name, singer, category },
        files,
      } = data

      const newData = {
        name,
        singer,
        category,
        download_url: files[0].path,
        image_path: files[1].path,
        image_path_cover: files[2].path,
      }
      const result = await new Song({ ...newData }).save()
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
      const result = await Song.findById(id)
      if (!result) {
        throw new createError.BadRequest("Song doesn't exist")
      }

      result.isDelete = 1
      return await result.save()
    } catch (error) {
      throw error
    }
  }

  async getSongFromArray(songIdList) {
    try {
      const result = await Promise.all(songIdList.map(async (songId) => await this.getById(songId)))
      console.log(result);
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new SongService()
