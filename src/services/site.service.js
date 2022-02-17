import userAPI from '../api/userAPI'
import Category from '../models/category.model'
import Album from '../models/album.model'
import Song from '../models/song.model'
import Artist from '../models/artist.model'
import Playlist from '../models/playlist.model'
import SongService from './song.service'
import { randomSong } from '../utils/common'
import AlbumService from './album.service'
import artistService from './artist.service'
import albumService from './album.service'
import playlistService from './playlist.service'

class SiteService {
  async home() {
    const titleList = [
      'Có thể bạn muốn nghe',
      'Nhạc mới phát hành',
      'Lựa chọn hôm nay',
      'Mới phát hành',
    ]

    try {
      const { data: songList } = await SongService.getAll({ limit: 100 })

      // const categoryList = await Category.find({})

      // const resultTwo = await Promise.all(
      //   categoryList.map(async (item) => {
      //     const { data } = await AlbumService.getAll({ limit: 20, categoryId: item._id })
      //     return {
      //       data,
      //       title: item.name,
      //     }
      //   })
      // )

      const resultOne = titleList.map((title) => ({
        title: title,
        data: randomSong(0, songList.length - 1, 20).map((item) => songList[item]),
      }))

      return [...resultOne] //  [...resultOne, ...resultTwo]
    } catch (error) {
      throw error
    }
  }

  async personal() {}

  async statistic() {
    const [userCount, artistCount, songCount, albumCount, playlistCount, categoryCount] =
      await Promise.all([
        userAPI.count(),
        Artist.find({}).count(),
        Song.find({}).count(),
        Album.find({}).count(),
        Playlist.find({}).count(),
        Category.find({}).count(),
      ])
    return {
      userCount: userCount.data,
      artistCount,
      songCount,
      albumCount,
      playlistCount,
      categoryCount,
    }
  }

  async top(data) {
    const topList = await Song.find({})
      .sort({ view: 'descending' })
      .limit(Number(data.limit) || 10).lean()
    const result = await SongService.getSongFromArraySong(topList)
    return result
  }

  async search({ q }) {
    const promiseList = [
      SongService.getAll({ q }),
      artistService.getAll({ q }),
      albumService.getAll({ q }),
      playlistService.getAll({ q }),
    ]

    const [songResult, artistResult, albumResult, playlistResult] = await Promise.all(promiseList)

    return {
      songResult,
      artistResult,
      albumResult,
      playlistResult,
    }
  }
}

export default new SiteService()
