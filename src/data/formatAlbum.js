import Artist from '../models/artist.model'
import Category from '../models/category.model'
import Song from '../models/song.model'
import Album from '../models/album.model'


import { random, randomNumber } from '../utils/common'

const categories = [
  {
    _id: '61f0b8b99b16ef39e2f36757',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Blues/Jazz',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.675Z',
    updatedAt: '2022-01-26T02:58:01.675Z',
  },
  {
    _id: '61f0b8b99b16ef39e2f36758',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Pop Việt',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.676Z',
    updatedAt: '2022-01-26T02:58:01.676Z',
  },
  {
    _id: '61f0b8b99b16ef39e2f36759',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Pop Âu-Mỹ',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.676Z',
    updatedAt: '2022-01-26T02:58:01.676Z',
  },
  {
    _id: '61f0b8b99b16ef39e2f3675a',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'R&B',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.676Z',
    updatedAt: '2022-01-26T02:58:01.676Z',
  },
  {
    _id: '61f0b8b99b16ef39e2f3675b',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Rock',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.677Z',
    updatedAt: '2022-01-26T02:58:01.677Z',
  },
  {
    _id: '61f0b8b99b16ef39e2f3675c',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Nhạc Hòa Tấu',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.677Z',
    updatedAt: '2022-01-26T02:58:01.677Z',
  },
  {
    _id: '61f0b8b99b16ef39e2f3675d',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Country',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.677Z',
    updatedAt: '2022-01-26T02:58:01.677Z',
  },
  {
    _id: '61f0b8b99b16ef39e2f3675e',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Dance',
    __v: 0,
    createdAt: '2022-01-26T02:58:01.677Z',
    updatedAt: '2022-01-26T02:58:01.677Z',
  },
  {
    _id: '61f0d210cf3246751c881503',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Rap Việt',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.168Z',
    updatedAt: '2022-01-26T04:46:08.168Z',
  },
  {
    _id: '61f0d210cf3246751c881504',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Beat',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.169Z',
    updatedAt: '2022-01-26T04:46:08.169Z',
  },
  {
    _id: '61f0d210cf3246751c881505',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Nhạc Trữ Tình',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.169Z',
    updatedAt: '2022-01-26T04:46:08.169Z',
  },
  {
    _id: '61f0d210cf3246751c881506',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Nhạc Châu Á',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.170Z',
    updatedAt: '2022-01-26T04:46:08.170Z',
  },
  {
    _id: '61f0d210cf3246751c881507',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Pop Hàn Quốc',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.170Z',
    updatedAt: '2022-01-26T04:46:08.170Z',
  },
  {
    _id: '61f0d210cf3246751c881508',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Vinahouse',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.170Z',
    updatedAt: '2022-01-26T04:46:08.170Z',
  },
  {
    _id: '61f0d210cf3246751c881509',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Nhạc Truyền Thống',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.170Z',
    updatedAt: '2022-01-26T04:46:08.170Z',
  },
  {
    _id: '61f0d210cf3246751c88150a',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Nhạc Phim',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.170Z',
    updatedAt: '2022-01-26T04:46:08.170Z',
  },
  {
    _id: '61f0d210cf3246751c88150b',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Nhạc Cách Mạng',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.170Z',
    updatedAt: '2022-01-26T04:46:08.170Z',
  },
  {
    _id: '61f0d210cf3246751c88150c',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Electronica',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.170Z',
    updatedAt: '2022-01-26T04:46:08.170Z',
  },
  {
    _id: '61f0d210cf3246751c88150d',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Hiphop/Rap',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.171Z',
    updatedAt: '2022-01-26T04:46:08.171Z',
  },
  {
    _id: '61f0d210cf3246751c88150e',
    description: null,
    bannerURL: null,
    isActive: true,
    isDelete: false,
    name: 'Nhạc Thiếu Nhi',
    __v: 0,
    createdAt: '2022-01-26T04:46:08.171Z',
    updatedAt: '2022-01-26T04:46:08.171Z',
  },
]
export const formatAlbumList = (albumList) => {
//   let songArr = []
//   return albumList.data.map(async (album) => {
//     const result = {}

//     if (album['id']) {
//       result['id'] = album['id']
//     }

//     if (album['name']) {
//       result['name'] = album['name']
//     }

//     if (album['singer_id']) {
//       const a =
//         (await Artist.findOne({ id: album['singer_id'] })) ||
//         (await Artist.findOne({ fullName: album['singer'][0] })) ||
//         (await Artist.findOne({}))

//       result['artistId'] = a._id
//     }

//     if (album['image310']) {
//       result['imageURL'] = album['image310'] || album['image']
//     }

//     if (album['category']) {
//       const a =
//         (await Category.findOne({ name: album['category'] })) ||
//         categories[randomNumber(0, categories.length - 1)]
//       result['categoryId'] = a._id
//     }

//     if (album['total_like']) {
//       result['view'] = album['total_like']
//     }

//     if(songArr?.length === 0) {
//       songArr = await Song.find({})
//     }

//       let [to, from] = random(songArr.length - 1)

//       let abc = songArr.slice(to, from).map((item) => item._id)
//       result['songList'] = abc

//       Album.insertMany([result])
// })
}
