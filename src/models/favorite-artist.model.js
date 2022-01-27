const mongoose = require('mongoose')

const favoriteArtistSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    artistId: {
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

export default mongoose.model('favorite-artist', favoriteArtistSchema, 'favorite-artist')
