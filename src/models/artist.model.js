const mongoose = require('mongoose')

// nếu ở schema không có một thuộc tính bất kì, nhưng ở trên db thì có sẽ
// lấy ra thì được, nhưng các thao tác (tạo, sửa, xóa) thì không được.
const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
    imageCoverUrl: {
      type: String,
    },
    genreList: {
      type: Array,
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

export default mongoose.model('artist', artistSchema, 'artists')
