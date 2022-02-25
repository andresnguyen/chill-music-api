import userAPI from '../api/userAPI'
import Category from '../models/category.model'
import Album from '../models/album.model'
import Song from '../models/song.model'
import Artist from '../models/artist.model'
import Playlist from '../models/playlist.model'
import SongService from './song.service'
import { randomSong } from '../utils/common'
import AlbumService from './album.service'
import ArtistService from './artist.service'
import PlaylistService from './playlist.service'
import RecentSong from '../models/recent-song'
import RecentPlaylist from '../models/recent-playlist'
import RecentAlbum from '../models/recent-album'
import FavoriteArtist from '../models/favorite-artist.model'

class SiteService {
  async getTopFavoriteArtist() {
    try {
      const favoriteArtist = await FavoriteArtist.find({}).lean()
      const favoriteCount = await Promise.all(
        favoriteArtist.map(async (item) => ({
          artistId: item.artistId,
          favoriteNumber: await FavoriteArtist.find({ artistId: item.artistId }).count().lean(),
        }))
      )

      favoriteCount.sort((a, b) => a.favoriteNumber - b.favoriteNumber).slice(0, 10)

      const result = await Promise.all(
        favoriteCount.map(async (item) => ({
          favoriteNumber: item.favoriteNumber,
          artist: await Artist.findById(item.artistId).lean(),
        }))
      )
      return result
    } catch (error) {
      throw error
    }
  }
  
  async home() {
    const titleList = [
      'Có thể bạn muốn nghe',
      'Nhạc mới phát hành',
      'Lựa chọn hôm nay',
      'Mới phát hành',
    ]

    try {
      const { data: songList } = await SongService.getAll({ limit: 100 })

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
    try {
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
    } catch (error) {
      throw error
    }
  }

  async top(data) {
    try {
      const topList = await Song.find({})
        .sort({ view: -1 })
        .limit(Number(data.limit) || 10)
        .lean()
      const result = await SongService.getSongFromArraySong(topList)
      return result
    } catch (error) {
      throw error
    }
  }

  async search({ q }) {
    try {
      const promiseList = [
        SongService.getAll({ q }),
        ArtistService.getAll({ q }),
        AlbumService.getAll({ q }),
        PlaylistService.getAll({ q }),
      ]

      const [songResult, artistResult, albumResult, playlistResult] = await Promise.all(promiseList)

      return {
        songResult,
        artistResult,
        albumResult,
        playlistResult,
      }
    } catch (error) {
      throw error
    }
  }

  async getRecentSong(user) {
    try {
      let recentSongList = await RecentSong.find({ userId: user._id })
        .sort({ createdAt: -1 })
        .lean()
      recentSongList = new Set(recentSongList.map((recent) => recent.songId))
      const result = await SongService.getSongFromArray([...recentSongList])

      return result
    } catch (error) {
      throw error
    }
  }

  async createRecentSong(user, songId) {
    try {
      const recentSong = await new RecentSong({ userId: user._id, songId }).save()
      return recentSong
    } catch (error) {
      throw error
    }
  }

  async getRecentPlaylist(user) {
    try {
      let recentPlaylistList = await RecentPlaylist.find({ userId: user._id })
        .sort({ createdAt: -1 })
        .lean()
      recentPlaylistList = new Set(recentPlaylistList.map((recent) => recent.playlistId))
      const result = await Playlist.find({
        _id: { $in: [...recentPlaylistList] },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  async createRecentPlaylist(user, playlistId) {
    try {
      const recentPlaylist = await new RecentPlaylist({ userId: user._id, playlistId }).save()
      return recentPlaylist
    } catch (error) {
      throw error
    }
  }

  async getRecentAlbum(user) {
    try {
      let recentAlbumList = await RecentAlbum.find({ userId: user._id })
        .sort({ createdAt: -1 })
        .lean()
      recentAlbumList = [...new Set(recentAlbumList.map((recent) => recent.albumId))]
      const result = await AlbumService.getAlbumFromArray(recentAlbumList)
      return result
    } catch (error) {
      throw error
    }
  }

  async createRecentAlbum(user, albumId) {
    try {
      const recentAlbum = await new RecentAlbum({ userId: user._id, albumId }).save()
      return recentAlbum
    } catch (error) {
      throw error
    }
  }
}

export default new SiteService()
