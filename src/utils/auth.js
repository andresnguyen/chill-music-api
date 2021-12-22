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
