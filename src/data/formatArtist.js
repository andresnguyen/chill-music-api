import { randomNumber } from '../utils/common'
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

export const format = (data) => {
  return data.map((item) => {
    const result = {}

    if (item['id']) {
      result['id'] = item['id']
    }

    if (item['name']) {
      result['fullName'] = item['name']
    }

    if (item['slug']) {
      result['slug'] = item['slug']
    }

    if (item['avatarURL']) {
      result['avatarURL'] = item['avatarURL']
    }

    if (item['bannerURL']) {
      result['bannerURL'] = item['bannerURL']
    }

    result['gender'] = randomNumber(1, 2)

    result['categoryId'] = categories[randomNumber(0, categories.length - 1)]._id

    return result
  })
}
