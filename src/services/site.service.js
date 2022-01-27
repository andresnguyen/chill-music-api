import Album from '../models/album.model'
import Category from '../models/category.model'
import Song from '../models/song.model'

import { randomSong } from '../utils/common'

class SiteService {
  async home() {
    const titleList = [
      'Có thể bạn muốn nghe',
      'Nhạc mới phát hành',
      'Lựa chọn hôm nay',
      'Mới phát hành',
    ]

    try {
      const songList = await Song.find({})

      const resultOne = titleList.map((title) => ({
        title: title,
        data: randomSong(0, songList.length - 1, 20).map((item) => songList[item]),
      }))

      const categoryList = await Category.find({})

      const resultTwo = await Promise.all(
        categoryList.map(async (item) => ({
          title: item.name,
          data: await Album.find({ categoryId: item._id }).limit(20),
        }))
      )

      return [...resultOne, ...resultTwo]
    } catch (error) {
      throw error
    }
  }
}

export default new SiteService()
