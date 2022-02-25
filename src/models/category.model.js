const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
      default: null,
    },
    bannerURL: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('category', categorySchema, 'category')
