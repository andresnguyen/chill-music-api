const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    songList: {
      type: Array,
      default: [],
    },
    artistList: {
      type: Array,
      required: true,
    },
    favoriteTotal: {
      type: Number,
    },
    genre: {
      type: String,
    },
    view: {
      type: Number,
      min: 0,
      default: 0,
    },
    identify: {
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

export default mongoose.model('playlist', playlistSchema, 'playlists')
