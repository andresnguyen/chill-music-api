import userRoute from './user.route'
import siteRoute from './site.route'
import songRoute from './song.route'
import playlistRoute from './playlist.route'
import albumRoute from './album.route'
import artistRoute from './artist.route'
import collectionRoute from './collection.route'
import authRoute from './auth.route'

function route(app) {
  app.use('/v1/api/collection', collectionRoute)
  app.use('/v1/api/auth', authRoute)
  app.use('/v1/api/users', userRoute)
  app.use('/v1/api/songs', songRoute)
  app.use('/v1/api/playlists', playlistRoute)
  app.use('/v1/api/albums', albumRoute)
  app.use('/v1/api/artists', artistRoute)
  app.use('/v1/api/', siteRoute)
}

export default route
