const mongoose = require('mongoose')

const recentSongSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    songId: {
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

export default mongoose.model('recent-song', recentSongSchema, 'recent-song')
