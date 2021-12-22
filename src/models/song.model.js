const mongoose = require('mongoose')

const songSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    imageCoverUrl: {
      type: String,
    },
    genreList: {
      type: Array,
    },
    artistList: {
      type: Array,
      required: true,
    },
    view: {
      type: Number,
      min: 0,
      default: 0,
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

export default mongoose.model('Song', songSchema, 'songs')
