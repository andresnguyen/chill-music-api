import Category from '../models/category.model'

class CategoryService {
  async getAll({ page = 1, limit = 20, q = '' }) {
    page = Number.parseInt(page) - 1
    limit = Number.parseInt(limit)
    const query = q ? { name: new RegExp(q, 'i') } : {}
    try {
      const data = await Category.find(query)
        .skip(page * limit)
        .limit(limit)
        .lean()
      const count = await Category.find(query).count()
      return { data, pagination: { page, limit, count } }
    } catch (error) {
      throw error
    }
  }

  async getById(id) {
    try {
      const result = await Category.findById(id).lean()
      return result
    } catch (error) {
      throw error
    }
  }

  async create(data) {
    try {
      const result = await new Category({ ...data }).save()
      return result
    } catch (error) {
      throw error
    }
  }

  async update(id, data) {
    try {
      const result = await Category.findByIdAndUpdate(id, data, {
        new: true,
      })
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const result = await Category.findByIdAndDelete(id)
      return result
    } catch (error) {
      throw error
    }
  }

  async getBySlug(data) {
    try {
      const result = await Category.findOne({ slug: data })
      return result
    } catch (error) {
      throw error
    }
  }


  async delete(id) {
    try {
      const result = await Category.findByIdAndDelete(id)
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteSoft(id) {
    try {
      const result = await Category.findByIdAndDelete(id)
      result.isDelete = 1
      await result.save()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new CategoryService()
