import userRoute from './user.route'
import siteRoute from './site.route'
import songRoute from './song.route'
import playlistRoute from './playlist.route'
import albumRoute from './album.route'
import artistRoute from './artist.route'
import categoryRoute from './category.route'
import collectionRoute from './collection.route'
import authRoute from './auth.route'

function route(app) {
  app.use('/v1/collections', collectionRoute)
  app.use('/v1/auth', authRoute)
  app.use('/v1/users', userRoute)
  app.use('/v1/songs', songRoute)
  app.use('/v1/playlists', playlistRoute)
  app.use('/v1/albums', albumRoute)
  app.use('/v1/artists', artistRoute)
  app.use('/v1/categories', categoryRoute)
  app.use('/v1', siteRoute)
}

export default route
