require('dotenv').config()

export const DOMAIN =
  process.env.NODE_ENV === 'production'
    ? 'https://chill-music-nodejs.herokuapp.com'
    : 'http://localhost:4001'
export const FACEBOOK_CLIENT_ID = '1583769365305136'
export const FACEBOOK_CLIENT_SECRET = 'e0478de802a032f3feeed01422959601'
export const GOOGLE_CLIENT_ID = '1053870740345-6429rcc6n3sbclr862234j3l3kf3k215.apps.googleusercontent.com'
export const GOOGLE_CLIENT_SECRET = 'jSdL3Lk8Mt4ajjdVylHdKtly'

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const DATABASE_URL = process.env.DATABASE_URL
export const PORT = process.env.PORT || 3001
