const mongoose = require('mongoose')

// nếu ở schema không có một thuộc tính bất kì, nhưng ở trên db thì có sẽ
// lấy ra thì được, nhưng các thao tác (tạo, sửa, xóa) thì không được.
const artistSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    fullName: {
      type: String,
    },
    slug: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
    bannerURL: {
      type: String,
    },
    description: {
      type: String,
      default: null,
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    gender: {
      type: Number,
      default: null,
    },
    categoryId: {
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

export default mongoose.model('artist', artistSchema, 'artist')
