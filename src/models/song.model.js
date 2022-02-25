
const mongoose = require('mongoose')

const songSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    mediaURL: {
      type: String,
      default: null,
    },
    imageURL: {
      type: String,
      default: null,
    },
    bannerURL: {
      type: String,
      default: null,
    },
    view: {
      type: Number,
      min: 0,
      default: 0,
    },
    time: {
      type: Number,
      min: 0,
      default: null,
    },
    artistList: {
      type: Array,
      default: []
    },
    categoryId: {
      type: String,
      default: null,
    },
    userId: {
      type: String,
      default: null,
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

export default mongoose.model('song', songSchema, 'song')
