import { INTERNAL_SERVER, OK } from '../constants/httpStatusCode.constant'
import { failedResponse, pluralResponse, singleResponse } from '../constants/response.constant'
import CollectionService from '../services/collection.service'

class CollectionController {
  // FAVORITE SONG ===========================================

  async getFavoriteSongList(req, res, next) {
    try {
      const favoriteSongList = await CollectionService.getFavoriteSongList(req.user._id)
      return res.status(OK).json({ ...pluralResponse, data: favoriteSongList })
    } catch (error) {
      next(error)
    }
  }

  async createFavoriteSong(req, res, next) {
    try {
      const songId = await CollectionService.createFavoriteSong(req.user._id, req.body.songId)
      return res.status(OK).json({ ...singleResponse, data: songId })
    } catch (error) {
      res.status(error.statusCode || INTERNAL_SERVER).json({
        ...failedResponse,
        message: error.message,
      })
    }
  }

  async deleteFavoriteSong(req, res, next) {
    try {
      const songId = await CollectionService.deleteFavoriteSong(req.user._id, req.params.songId)
      res.status(OK).json({ ...singleResponse, data: songId })
    } catch (error) {
      next(error)
    }
  }

  // PLAYLIST ============================================

  async getPlaylistList(req, res, next) {
    try {
      const playlistList = await CollectionService.getPlaylistList(req.user._id)
      return res.status(OK).json({ ...pluralResponse, data: playlistList })
    } catch (error) {
      next(error)
    }
  }

  async getPlaylistById(req, res, next) {
    try {
      const playlist = await CollectionService.getPlaylistById(req.params.playlistId)
      return res.status(OK).json({ ...pluralResponse, data: playlist })
    } catch (error) {
      next(error)
    }
  }

  async createPlaylist(req, res, next) {
    try {
      const playlist = await CollectionService.createPlaylist(req.user._id, req.body)
      return res.status(OK).json({ ...singleResponse, data: playlist })
    } catch (error) {
      next(error)
    }
  }

  async updatePlaylist(req, res, next) {
    const playlistId = req.params.playlistId
    try {
      const album = await CollectionService.updatePlaylist(playlistId, req.body)
      res.status(OK).json({ ...singleResponse, data: album })
    } catch (error) {
      next(error)
    }
  }

  async deletePlaylist(req, res, next) {
    try {
      const playlist = await CollectionService.deletePlaylist(req.user._id, req.params.playlistId)
      res.status(OK).json({ ...singleResponse, data: playlist })
    } catch (error) {
      next(error)
    }
  }

  async addSongToPlaylist(req, res, next) {
    try {
      const result = await CollectionService.addSongToPlaylist(
        req.user_id,
        req.params.playlistId,
        req.body.songId
      )
      res.status(OK).json({ ...singleResponse, data: result })
    } catch (error) {
      next(error)
    }
  }

  async deleteSongFromPlaylist(req, res, next) {
    try {
      const result = await CollectionService.deleteSongFromPlaylist(
        req.user_id,
        req.params.playlistId,
        req.body.songId
      )
      res.status(OK).json({ ...singleResponse, data: result })
    } catch (error) {
      next(error)
    }
  }
  // ALBUMS =============================================

  async getAlbumList(req, res, next) {
    try {
      const albumList = await CollectionService.getAlbumList(req.user._id)
      return res.status(OK).json({ ...pluralResponse, data: albumList })
    } catch (error) {
      next(error)
    }
  }

  async getAlbumById(req, res, next) {
    try {
      const album = await CollectionService.getAlbumById(req.user._id, req.params.albumId)
      return res.status(OK).json({ ...singleResponse, data: album })
    } catch (error) {
      next(error)
    }
  }

  async addAlbumToCollection(req, res, next) {
    try {
      const result = await CollectionService.addAlbumToCollection(req.user._id, req.body.albumId)
      return res.status(OK).json({ ...singleResponse, data: result })
    } catch (error) {
      next(error)
    }
  }

  async deleteAlbumFromCollection(req, res, next) {
    try {
      const result = await CollectionService.deleteAlbumFromCollection(
        req.user._id,
        req.params.albumId
      )
      return res.status(OK).json({ ...singleResponse, data: result })
    } catch (error) {
      next(error)
    }
  }

  // ARTIST ==============================================

  async getArtistList(req, res, next) {
    try {
      const artistList = await CollectionService.getArtistList(req.user._id)
      return res.status(OK).json({ ...pluralResponse, data: artistList })
    } catch (error) {
      next(error)
    }
  }

  async addArtistToCollection(req, res, next) {
    try {
      const result = await CollectionService.addArtistToCollection(req.user._id, req.body.artistId)
      return res.status(OK).json({ ...singleResponse, data: result })
    } catch (error) {
      next(error)
    }
  }

  async deleteArtistFromCollection(req, res, next) {
    try {
      const result = await CollectionService.deleteArtistFromCollection(
        req.user._id,
        req.params.artistId
      )
      return res.status(OK).json({ ...singleResponse, data: result })
    } catch (error) {
      next(error)
    }
  }

  // MY SONG ===============================================

  async getMySongList(req, res, next) {
    try {
      const songUploadList = await CollectionService.getMySongList(req.user._id)
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
}

export default new CollectionController()
