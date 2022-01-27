
const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
      default: null,
    },
    imageURL: {
      type: String,
      default: null,
    },
    bannerURL: {
      type: String,
      default: null,
    },
    songList: {
      type: Array,
      default: [],
    },
    view: {
      type: Number,
      min: 0,
      default: 0,
    },
    userId: {
      type: String,
      default: null,
    },
    artistId: {
      type: String,
      default: null,
    },
    categoryId: {
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

export default mongoose.model('album', albumSchema, 'album')

