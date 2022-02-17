import express from 'express'
const router = express.Router()
import CollectionController from '../controllers/collection.controller'
import fileUploader from '../configs/cloudinary.config'


router.get('/favorite-song-ids', CollectionController.getFavoriteSongIdList)
router.get('/favorite-album-ids', CollectionController.getFavoriteAlbumIdList)
router.get('/favorite-playlist-ids', CollectionController.getFavoritePlaylistIdList)
router.get('/favorite-artist-ids', CollectionController.getFavoriteArtistIdList)

// FAVORITE
router.get('/favorite-songs', CollectionController.getFavoriteSongList)
router.post('/favorite-songs', CollectionController.createFavoriteSong)
router.delete('/favorite-songs/:songId', CollectionController.deleteFavoriteSong)

// PLAYLIST
router.get('/playlists', CollectionController.getPlaylistList)
router.post('/playlists', CollectionController.createPlaylist)
router.patch('/playlists/:playlistId', CollectionController.updatePlaylist)
router.delete('/playlists/:playlistId', CollectionController.deletePlaylist)

router.post('/playlists/:playlistId/add', CollectionController.addSongToPlaylist)
router.patch('/playlists/:playlistId/delete', CollectionController.deleteSongFromPlaylist)

router.get('/favorite-playlists', CollectionController.getFavoritePlaylistList)
router.post('/favorite-playlists', CollectionController.addPlaylistToFavorite)
router.delete('/favorite-playlists/:playlistId', CollectionController.deletePlaylistFromFavorite)

// ALBUMS 
router.get('/albums', CollectionController.getFavoriteAlbum)
router.post('/albums', CollectionController.addAlbumToFavorite)
router.delete('/albums/:albumId', CollectionController.deleteAlbumFromFavorite)

// ARTIST
router.get('/artists', CollectionController.getFavoriteArtistList)
router.post('/artists', CollectionController.addArtistToFavorite)
router.delete('/artists/:artistId', CollectionController.deleteArtistFromFavorite)

// MY SONG
router.get('/my-songs', CollectionController.getMySongList)
router.post('/my-songs', fileUploader.single('file'), CollectionController.createMySong)
router.delete('/my-songs/:songId', CollectionController.deleteMySong)

router.get('/', CollectionController.getInfo)



export default router
