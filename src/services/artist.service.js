import Album from '../models/album.model'
import Artist from '../models/artist.model'
import Category from '../models/category.model'
import SongService from './song.service'
import FavoriteArtist from '../models/favorite-artist.model'
import AlbumService from './album.service'

class ArtistService {
  async getAll({ page = 1, limit = 20, q = '', categoryId, gender, isActive }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    const query = q ? { fullName: new RegExp(q, 'i') } : {}
    try {
      if (categoryId) query.categoryId = categoryId
      if (gender) query.gender = Number(gender)
      if (isActive) query.isActive = isActive === 'false' ? false : true

      const [data, count] = await Promise.all([
        Artist.find(query)
          .skip(page * limit)
          .limit(limit)
          .sort({ createdAt: -1 })
          .lean(),
        Artist.find(query).count(),
      ])

      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await Artist.findById(id).lean()
      if (!result) return null
      const [category, favoriteNumber] = await Promise.all([
        Category.findById(result.categoryId),
        FavoriteArtist.find({
          artistId: id,
        }).count(),
      ])
      result.category = category
      result.favoriteNumber = favoriteNumber
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async create(data) {
    try {
      const result = await new Artist({ ...data }).save()
      return result
    } catch (error) {
      throw error
    }
  }

  async update(id, data) {
    try {
      const result = await Artist.findByIdAndUpdate(id, data, {
        new: true,
      })
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const result = await Artist.findByIdAndDelete(id)
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteSoft(id) {
    try {
      const result = await Artist.findByIdAndDelete(id)
      result.isDelete = 1
      await result.save()
      return result
    } catch (error) {
      throw error
    }
  }

  async getDetail(id) {
    try {
      const artist = await this.getById(id)

      if (!artist) return null

      const [songList, albumList, artistList, favoriteNumber] = await Promise.all([
        SongService.getSongByArtistID(artist._id.toString()),
        AlbumService.getAll({ artistId: artist._id.toString() }),
        Artist.find({
          categoryId: artist.categoryId,
        }).limit(5),
        FavoriteArtist.find({
          artistId: id,
        }).count(),
      ])

      return {
        ...artist,
        songList,
        albumList: albumList.data,
        artistList,
        favoriteNumber,
      }
    } catch (error) {
      throw error
    }
  }

  async getArtistFromArray(artistIdList) {
    try {
      const result = await Promise.all(artistIdList.map((artistId) => this.getById(artistId)))
      return result.filter((item) => Boolean(item))
    } catch (error) {
      throw error
    }
  }
}

export default new ArtistService()
