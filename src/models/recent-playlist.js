const mongoose = require('mongoose')

const recentPlaylistSchema = new mongoose.Schema(
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

export default mongoose.model('recent-playlist', recentPlaylistSchema, 'recent-playlist')
  