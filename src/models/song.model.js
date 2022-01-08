import { formatSongList } from './formatSong'

const mongoose = require('mongoose')

const songSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    bannerUrl: {
      type: String,
    },
    genre: {
      type: String,
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
    isDownloadable: {
      type: Boolean,
      default: true,
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

// const result = formatSongList()
// mongoose.model('Song', songSchema, 'songs').insertMany(result)

