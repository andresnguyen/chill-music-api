const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    songList: {
      type: Array,
      default: [],
    },
    imageURL: {
      type: String,
      default: null,
    },
    categoryId: {
      type: String,
      default: null,
    },
    bannerURL: {
      type: String,
      default: null,
    },
    view: {
      type: Number,
      min: 0,
      default: 0,
    },
    userId: {
      type: String,
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

export default mongoose.model('playlist', playlistSchema, 'playlist')
