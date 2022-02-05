import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { ACCESS_TOKEN_SECRET } from '../constants/auth.constant'

export const encodePassword = async (password) => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

export const verifyPassword = async (hash, password) => {
  return await bcrypt.compare(password, hash)
}

export const generateAccessToken = (id) => {
  return jwt.sign({ id }, ACCESS_TOKEN_SECRET, {
    expiresIn: '2000000s',
  })
}

export const verifyAccessToken = async (token) => {
  if (!token) {
    return
  }

  const { id } = await jwt.verify(token, ACCESS_TOKEN_SECRET)
  return id
}

const FAKE_USER = {
  _id: '61f7425137ba5ea95f3af7cf',
  avatarURL: 'https://chill-music-webapp.vercel.app/static/media/avatar.462af2608b38b7d05a2b.jpg',
  role: 2,
  isActive: true,
  isDelete: false,
  email: 'thuongnguyen.it78@gmail.com',
  dateOfBirth: '1999-07-07T17:00:00.000Z',
  fullName: 'Thuong Nguyen',
  gender: 1,
  createdAt: '2022-01-31T01:58:41.020Z',
  updatedAt: '2022-01-31T01:58:41.020Z',
  __v: 0,
}
