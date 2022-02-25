import express from 'express'
const router = express.Router()
import CollectionController from '../controllers/collection.controller'
import fileUploader from '../configs/cloudinary.config'
import AuthMiddleware from '../middlewares/auth.middleware'

router.get(
  '/favorite-song-ids',
  AuthMiddleware.checkLogin,
  CollectionController.getFavoriteSongIdList
)
router.get(
  '/favorite-album-ids',
  AuthMiddleware.checkLogin,
  CollectionController.getFavoriteAlbumIdList
)
router.get(
  '/favorite-playlist-ids',
  AuthMiddleware.checkLogin,
  CollectionController.getFavoritePlaylistIdList
)
router.get(
  '/favorite-artist-ids',
  AuthMiddleware.checkLogin,
  CollectionController.getFavoriteArtistIdList
)

// FAVORITE
router.get('/favorite-songs', AuthMiddleware.checkLogin, CollectionController.getFavoriteSongList)
router.post('/favorite-songs', AuthMiddleware.checkLogin, CollectionController.createFavoriteSong)
router.delete(
  '/favorite-songs/:songId',
  AuthMiddleware.checkLogin,
  CollectionController.deleteFavoriteSong
)

// PLAYLIST
router.get('/playlists', AuthMiddleware.checkLogin, CollectionController.getPlaylistList)
router.post('/playlists', AuthMiddleware.checkLogin, CollectionController.createPlaylist)
router.patch(
  '/playlists/:playlistId',
  AuthMiddleware.checkLogin,
  CollectionController.updatePlaylist
)
router.delete(
  '/playlists/:playlistId',
  AuthMiddleware.checkLogin,
  CollectionController.deletePlaylist
)

router.post(
  '/playlists/:playlistId/add',
  AuthMiddleware.checkLogin,
  CollectionController.addSongToPlaylist
)
router.patch(
  '/playlists/:playlistId/delete',
  AuthMiddleware.checkLogin,
  CollectionController.deleteSongFromPlaylist
)

router.get(
  '/favorite-playlists',
  AuthMiddleware.checkLogin,
  CollectionController.getFavoritePlaylistList
)
router.post(
  '/favorite-playlists',
  AuthMiddleware.checkLogin,
  CollectionController.addPlaylistToFavorite
)
router.delete(
  '/favorite-playlists/:playlistId',
  AuthMiddleware.checkLogin,
  CollectionController.deletePlaylistFromFavorite
)

// ALBUMS
router.get('/albums', AuthMiddleware.checkLogin, CollectionController.getFavoriteAlbum)
router.post('/albums', AuthMiddleware.checkLogin, CollectionController.addAlbumToFavorite)
router.delete(
  '/albums/:albumId',
  AuthMiddleware.checkLogin,
  CollectionController.deleteAlbumFromFavorite
)

// ARTIST
router.get('/artists', AuthMiddleware.checkLogin, CollectionController.getFavoriteArtistList)
router.post('/artists', AuthMiddleware.checkLogin, CollectionController.addArtistToFavorite)
router.delete(
  '/artists/:artistId',
  AuthMiddleware.checkLogin,
  CollectionController.deleteArtistFromFavorite
)

// MY SONG
router.get('/my-songs', AuthMiddleware.checkLogin, CollectionController.getMySongList)
router.post(
  '/my-songs',
  fileUploader.single('file'),
  AuthMiddleware.checkLogin,
  CollectionController.createMySong
)
router.delete('/my-songs/:songId', AuthMiddleware.checkLogin, CollectionController.deleteMySong)

router.get('/', AuthMiddleware.checkLogin, CollectionController.getInfo)

export default router
