const mongoose = require('mongoose')

const recentAlbumSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    albumId: {
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

export default mongoose.model('recent-album', recentAlbumSchema, 'recent-album')
  