import { INTERNAL_SERVER, OK } from '../constants/httpStatusCode.constant'
import { failedResponse, pluralResponse, singleResponse } from '../constants/response.constant'
import CollectionService from '../services/collection.service'

class CollectionController {
  // FAVORITE SONG ===========================================

  async getFavoriteSongList(req, res, next) {
    try {
      const data = await CollectionService.getFavoriteSongList(req.user)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async createFavoriteSong(req, res, next) {
    try {
      const data = await CollectionService.createFavoriteSong(req.user, req.body.songId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      res.status(error.statusCode || INTERNAL_SERVER).json({
        ...failedResponse,
        message: error.message,
      })
    }
  }

  async deleteFavoriteSong(req, res, next) {
    try {
      const data = await CollectionService.deleteFavoriteSong(req.user, req.params.songId)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  // PLAYLIST ============================================

  async getPlaylistList(req, res, next) {
    try {
      const data = await CollectionService.getPlaylistList(req.user)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async getPlaylistById(req, res, next) {
    try {
      const data = await CollectionService.getPlaylistById(req.params.playlistId)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async createPlaylist(req, res, next) {
    try {
      const data = await CollectionService.createPlaylist(req.user, req.body)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async updatePlaylist(req, res, next) {
    try {
      const data = await CollectionService.updatePlaylist(req.user, req.params.playlistId, req.body)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async deletePlaylist(req, res, next) {
    try {
      const data = await CollectionService.deletePlaylist(req.user, req.params.playlistId)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async addSongToPlaylist(req, res, next) {
    try {
      const data = await CollectionService.addSongToPlaylist(
        req.user,
        req.params.playlistId,
        req.body.songId
      )
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async deleteSongFromPlaylist(req, res, next) {
    try {
      const data = await CollectionService.deleteSongFromPlaylist(
        req.user,
        req.params.playlistId,
        req.body.songId
      )
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async getFavoritePlaylistList(req, res, next) {
    try {
      const data = await CollectionService.getFavoritePlaylistList(req.user)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async addPlaylistToFavorite(req, res, next) {
    try {
      const data = await CollectionService.addPlaylistToFavorite(req.user, req.body.playlistId)
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }
  async deletePlaylistFromCollection(req, res, next) {
    try {
      const data = await CollectionService.deletePlaylistFromCollection(
        req.user,
        req.params.playlistId
      )
      res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  // ALBUMS =============================================

  async getFavoriteAlbum(req, res, next) {
    try {
      const data = await CollectionService.getFavoriteAlbum(req.user)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async addAlbumToFavorite(req, res, next) {
    try {
      const data = await CollectionService.addAlbumToFavorite(req.user, req.body.albumId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async deleteAlbumFromFavorite(req, res, next) {
    try {
      const data = await CollectionService.deleteAlbumFromFavorite(req.user, req.params.albumId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  // ARTIST ==============================================

  async getFavoriteArtistList(req, res, next) {
    try {
      const data = await CollectionService.getFavoriteArtistList(req.user)
      return res.status(OK).json({ ...pluralResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async addArtistToFavorite(req, res, next) {
    try {
      const data = await CollectionService.addArtistToFavorite(req.user, req.body.artistId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  async deleteArtistFromFavorite(req, res, next) {
    try {
      const data = await CollectionService.deleteArtistFromFavorite(req.user, req.params.artistId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }

  // MY SONG ===============================================

  async getMySongList(req, res, next) {
    try {
      const songUploadList = await CollectionService.getMySongList(req.user)
      return res.status(OK).json({ ...pluralResponse, data: songUploadList })
    } catch (error) {
      next(error)
    }
  }

  async createMySong(req, res, next) {
    try {
      const song = await CollectionService.createMySong(req.user?._id, req)
      res.status(OK).json({ ...singleResponse, data: song })
    } catch (error) {
      next(error)
    }
  }

  async deleteMySong(req, res, next) {
    try {
      const song = await CollectionService.deleteMySong(req.user?._id, req.params.songId)
      res.status(OK).json({ ...singleResponse, data: song })
    } catch (error) {
      next(error)
    }
  }

  // OTHERS ===============================================

  async getInfo(req, res, next) {
    try {
      const data = await CollectionService.getInfo(req.user, req.params.artistId)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }
}

export default new CollectionController()
