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

  

// mongoose.model('artist', artistSchema, 'artist').insertMany(result)


export default mongoose.model('song-artist', songAndArtistSchema, 'song-artist')
