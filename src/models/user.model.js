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
    facebookId: {
      type: String,
    },
    googleId: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: Number,
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

export default mongoose.model('user', userSchema, 'user')
