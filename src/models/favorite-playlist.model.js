const mongoose = require('mongoose')

const favoritePlaylistSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    playlistId: {
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

export default mongoose.model('favorite-playlist', favoritePlaylistSchema, 'favorite-playlist')
