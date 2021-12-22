import Album from '../models/album.model'

class AlbumService {
  async getAll({ page = 0, limit = 20, q = '' }) {
    page = Number.parseInt(page)
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    try {
      const data = await Album.find(query)
        .skip(page * limit)
        .limit(limit)
        .lean()
      const count = await Album.find(query).count()
      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await Album.findById(id).lean()
      return result
    } catch (error) {
      throw error
    }
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
