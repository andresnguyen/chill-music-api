const mongoose = require('mongoose')

const songCommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    songId: {
      type: String,
    },
    message: {
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

export default mongoose.model('song-comment', songCommentSchema, 'song-comment')
