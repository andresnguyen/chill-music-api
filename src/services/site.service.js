import Song from '../models/song.model'
import Playlist from '../models/playlist.model'

class SiteService {
  async getHome() {
    const titleList = [
      'Có thể bạn muốn nghe',
      'Nhạc mới phát hành',
      'Lựa chọn hôm nay',
      'Mới phát hành',
    ]

    try {
      const songList = await Song.get().limit(titleList.length * 20)
      const playlistList = await Playlist.get().limit(titleList.length * 4)

      playlistList = playlistList.map((playlist, index) => {
        return {
          ...playlist,
          songList: songList.slice(index, index + 20),
        }
      })

      const result = titleList.map((title, index) => {
        return {
          title: title,
          playlistList: playlistList.slice(index, index + 4),
        }
      })

      return result
    } catch (error) {
      throw error
    }
  }
}

export default new SiteService()
