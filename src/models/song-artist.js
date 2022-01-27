const mongoose = require('mongoose')

const songAndArtistSchema = new mongoose.Schema(
  {
    artistId: {
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

export default mongoose.model('song-artist', songAndArtistSchema, 'song-artist')
