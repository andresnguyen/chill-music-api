import Album from '../models/album.model'
import User from '../models/user.model'
import Artist from '../models/artist.model'
import Playlist from '../models/playlist.model'
import Song from '../models/song.model'

import FavoriteSong from '../models/favorite-song.model'
import FavoriteAlbum from '../models/favorite-album.model'
import FavoritePlaylist from '../models/favorite-playlist.model'
import FavoriteArtist from '../models/favorite-artist.model'

import SongService from './song.service'
import AlbumService from './album.service'
import ArtistService from './artist.service'

import createError from 'http-errors'

class CollectionService {
  // FAVORITE SONG ===========================================

  async getFavoriteSongList(user) {
    try {
      const favoriteSongList = await FavoriteSong.find({
        userId: user._id,
      })

      const result = await SongService.getSongFromArray(
        favoriteSongList.map((favoriteSong) => favoriteSong.songId)
      )

      return result
    } catch (error) {
      throw error
    }
  }

  async createFavoriteSong(user, songId) {
    try {
      if (await FavoriteSong.findOne({ songId: songId, userId: user._id })) {
        throw new createError.BadRequest('This song exists in your favorite song list')
      }
      await new FavoriteSong({ songId: songId, userId: user._id }).save()
      return true
    } catch (error) {
      throw error
    }
  }

  async deleteFavoriteSong(user, songId) {
    try {
      const favoriteSong = await FavoriteSong.findOneAndDelete({ songId: songId, userId: user._id })
      if (!favoriteSong) {
        throw new createError.BadRequest('This song does not exists in your favorite song list')
      }
      return true
    } catch (error) {
      throw error
    }
  }

  // PLAYLIST ============================================

  async getFavoritePlaylistList(user) {
    try {
      const favoritePlaylistList = await FavoritePlaylist.find({
        userId: user._id,
      })

      const playlistList = await Playlist.find({
        _id: { $in: favoritePlaylistList.map((favoritePlaylist) => favoritePlaylist.playlistId) },
      })
      return playlistList
    } catch (error) {
      throw error
    }
  }

  async addPlaylistToFavorite(user, playlistId) {
    try {
      if (!(await Playlist.findById(playlistId))) {
        throw new createError.BadRequest('This playlist does not exists')
      }

      if (await FavoritePlaylist.findOne({ userId: user._id, playlistId })) {
        throw new createError.BadRequest('This playlist exists in your playlist list')
      }

      await new FavoritePlaylist({
        userId: user._id,
        playlistId,
      }).save()

      return true
    } catch (error) {
      throw error
    }
  }

  async deletePlaylistFromFavorite(user, playlistId) {
    try {
      const favoritePlaylist = await FavoritePlaylist.findOneAndDelete({
        userId: user._id,
        playlistId,
      })
      
      if (!favoritePlaylist) {
        throw new createError.BadRequest('This playlist does not exist in your album list')
      }

      return true
    } catch (error) {
      throw error
    }
  }

  // v
  async getPlaylistList(user) {
    try {
      const playlistList = await Playlist.find({
        userId: user._id,
      })

      return playlistList
    } catch (error) {
      throw error
    }
  }

  // v
  async getPlaylistById(playlistId) {
    try {
      const playlist = await Playlist.findById(playlistId)
      const [songList] = await Promise.all([SongService.getSongFromArray(playlist.songList)])
      return { ...playlist, songList }
    } catch (error) {
      throw error
    }
  }

  // v
  async createPlaylist(user, newPlaylist) {
    try {
      const playlist = await new Playlist({ ...newPlaylist, userId: user._id }).save()
      return playlist
    } catch (error) {
      throw error
    }
  }

  // v
  async updatePlaylist(user, playlistId, updatePlaylist) {
    try {
      const playlist = await Playlist.findOneAndUpdate(
        {
          userId: user._id,
          _id: playlistId,
        },
        updatePlaylist,
        {
          new: true,
        }
      )

      if (!playlist) {
        throw new createError.BadRequest(
          `Playlist not exists in current user's playlist or playlist is invalid`
        )
      }
      return playlist
    } catch (error) {
      throw error
    }
  }

  // v
  async deletePlaylist(user, playlistId) {
    try {
      const playlist = await Playlist.findOneAndDelete({ userId: user._id, _id: playlistId })
      if (!playlist) {
        throw new createError.BadRequest(
          `Playlist not exists in current user's playlist or playlist is invalid`
        )
      }

      return true
    } catch (error) {
      throw error
    }
  }

  // v
  async addSongToPlaylist(user, playlistId, songId) {
    try {
      const playlist = await Playlist.findOne({ _id: playlistId, userId: user._id })
      if (!playlist) {
        throw new createError.BadRequest('The playlist is not exists')
      }

      if (!(await Song.findById(songId))) {
        throw new createError.BadRequest('The song is not exists')
      }

      if (playlist.songList.includes(songId)) {
        return playlist
      }

      playlist.songList.unshift(songId)
      await playlist.save()
      return playlist
    } catch (error) {
      throw error
    }
  }

  // v
  async deleteSongFromPlaylist(user, playlistId, songId) {
    try {
      const playlist = await Playlist.findOne({ _id: playlistId, userId: user._id })
      if (!playlist) {
        throw new createError.BadRequest('The playlist is not exists')
      }

      if (!playlist.songList.includes(songId)) {
        throw new createError.BadRequest('This song does not exist in the playlist')
      }

      playlist.songList = playlist.songList.filter((songItem) => songItem !== songId)
      await playlist.save()
      return playlist
    } catch (error) {
      throw error
    }
  }

  // ALBUMS=============================================

  // v
  async getFavoriteAlbum(user) {
    try {
      const favoriteAlbumList = await FavoriteAlbum.find({
        userId: user._id,
      })

      const playlistList = await AlbumService.getSongFromArray(
        favoriteAlbumList.map((favoriteAlbum) => favoriteAlbum.albumId)
      )
      return playlistList
    } catch (error) {
      throw error
    }
  }

  async addAlbumToFavorite(user, albumId) {
    try {
      if (!(await Album.findById(albumId))) {
        throw new createError.BadRequest('This album exists in your album list')
      }

      if (await FavoriteAlbum.findOne({ userId: user._id, albumId })) {
        throw new createError.BadRequest('This album exists in your album list')
      }

      await new FavoriteAlbum({
        userId: user._id,
        albumId,
      }).save()

      return true
    } catch (error) {
      throw error
    }
  }

  async deleteAlbumFromFavorite(user, albumId) {
    try {
      const favoriteAlbum = await FavoriteAlbum.findOneAndDelete({
        userId: user._id,
        albumId,
      })

      if (!favoriteAlbum) {
        throw new createError.BadRequest('This album does not exist in your album list')
      }

      return true
    } catch (error) {
      throw error
    }
  }

  // ARTIST==============================================

  async getFavoriteArtistList(user) {
    try {
      const favoriteArtistList = await FavoriteArtist.find({
        userId: user._id,
      })

      const artistList = await ArtistService.getArtistFromArray(
        favoriteArtistList.map((favoriteArtist) => favoriteArtist.artistId)
      )
      return artistList
    } catch (error) {
      throw error
    }
  }

  async addArtistToFavorite(user, artistId) {
    try {
      if (!(await Artist.findById(artistId))) {
        throw new createError.BadRequest('This artist does not exists')
      }

      if (await FavoriteArtist.findOne({ userId: user._id, artistId })) {
        throw new createError.BadRequest('This artist exists in your artist list')
      }

      await new FavoriteArtist({
        userId: user._id,
        artistId,
      }).save()

      return true
    } catch (error) {
      throw error
    }
  }

  async deleteArtistFromFavorite(user, artistId) {
    try {
      const artistFavorite = await FavoriteArtist.findOneAndDelete({
        userId: user._id,
        artistId,
      })

      if (!artistFavorite) {
        throw new createError.BadRequest('This artist does not exist in your artist list')
      }

      return true
    } catch (error) {
      throw error
    }
  }

  // MY SONG===============================================

  async getMySongList(user) {
    try {
      const songList = await SongService.getSongByQuery({ userId: user._id })
      return songList
    } catch (error) {
      throw error
    }
  }

  async createMySong(user, data) {
    const { name, imageURL, mediaURL } = data
    try {
      const song = await new Song({
        name,
        imageURL,
        mediaURL,
        userId: user._id.toString(),
      }).save()
      return song
    } catch (error) {
      throw error
    }
  }

  async deleteMySong(userId, songId) {
    try {
      const result = Song.findOneAndDelete({ userId: user._id, _id: songId })
      if (!result) {
        throw new createError.BadRequest('The song not exist or user does not have the song')
      }
      return true
    } catch (error) {
      throw error
    }
  }

  async getInfo(user) {
    try {
      const [
        favoriteSongList,
        favoriteAlbumList,
        playlistList,
        favoritePlaylistList,
        mySongList,
        favoriteArtistList,
      ] = await Promise.all([
        this.getFavoriteSongList(user),
        this.getFavoriteAlbum(user),
        this.getPlaylistList(user),
        this.getFavoritePlaylistList(user),
        this.getMySongList(user),
        this.getFavoriteArtistList(user),
      ])

      return {
        favoriteSongList,
        favoriteAlbumList,
        playlistList,
        favoritePlaylistList,
        mySongList,
        favoriteArtistList,
      }
    } catch (error) {
      throw error
    }
  }

  // FAVORITE
  async getFavoriteSongIdList(user) {
    try {
      const songFavorite = await FavoriteSong.find({
        userId: user._id,
      }).lean()
      return songFavorite
    } catch (error) {
      throw error
    }
  }

  async getFavoriteAlbumIdList(user) {
    try {
      const albumFavorite = await FavoriteAlbum.find({
        userId: user._id,
      }).lean()
      return albumFavorite
    } catch (error) {
      throw error
    }
  }

  async getFavoritePlaylistIdList(user) {
    try {
      const playlistFavorite = await FavoritePlaylist.find({
        userId: user._id,
      }).lean()
      return playlistFavorite
    } catch (error) {
      throw error
    }
  }

  async getFavoriteArtistIdList(user) {
    try {
      const artistFavorite = await FavoriteArtist.find({
        userId: user._id,
      }).lean()
      return artistFavorite
    } catch (error) {
      throw error
    }
  }
}

export default new CollectionService()
