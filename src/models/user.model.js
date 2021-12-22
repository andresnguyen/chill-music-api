const mongoose = require('mongoose')
import { encodePassword } from '../utils/auth'

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      select: false,
    },
    avatarUrl: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    facebookId: {
      type: String,
    },
    googleId: {
      type: String,
    },
    gender: {
      type: String,
    },
    favoriteSongIdList: {
      type: Array,
      default: [],
    },
    playlistIdList: {
      type: Array,
      default: [],
    },
    albumIdList: {
      type: Array,
      default: [],
    },
    recentSongIdList: {
      type: Array,
      default: [],
    },
    songUploadIdList: {
      type: Array,
      default: [],
    },
    followingArtistIdList: {
      type: Array,
      default: [],
    },
    role: {
      type: Number,
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

userSchema.pre('save', async function hashPassword(next) {
  try {
    const user = this
    if (user.isModified('password')) {
      user.password = await encodePassword(user.password)
    }
    next()
  } catch (error) {
    next(error)
  }
})

export default mongoose.model('user', userSchema, 'users')
