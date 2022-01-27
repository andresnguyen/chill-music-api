const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    songList: {
      type: Array,
      default: [],
    },
    imageURL: {
      type: String,
    },
    bannerURL: {
      type: String,
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
