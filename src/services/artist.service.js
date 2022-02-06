import Artist from '../models/artist.model'

class ArtistService {
  async getAll({ page = 0, limit = 20, q = '' }) {
    page = Number.parseInt(page)
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    try {
      const data = await Artist.find(query)
        .skip(page * limit)
        .limit(limit)
        .lean()
      const count = await Artist.find(query).count()
      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await Artist.findById(id).lean()
      return result
    } catch (error) {
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

  async getBySlug(data) {
    try {
      const result = await Artist.findOne({ slug: data })
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

  async getArtistFromArray(artistIdList) {
    try {
      const result = await Promise.all(
        artistIdList.map(async (artistId) => await this.getById(artistId))
      )
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new ArtistService()
