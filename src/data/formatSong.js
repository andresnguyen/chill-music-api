import {randomNumber} from '../utils/common'
const categories = [
  {
      "_id": "61f0b8b99b16ef39e2f36757",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "Jazz/Blue",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.675Z",
      "updatedAt": "2022-01-26T02:58:01.675Z"
  },
  {
      "_id": "61f0b8b99b16ef39e2f36758",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "Pop Việt",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.676Z",
      "updatedAt": "2022-01-26T02:58:01.676Z"
  },
  {
      "_id": "61f0b8b99b16ef39e2f36759",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "Pop Âu-Mỹ",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.676Z",
      "updatedAt": "2022-01-26T02:58:01.676Z"
  },
  {
      "_id": "61f0b8b99b16ef39e2f3675a",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "R&B",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.676Z",
      "updatedAt": "2022-01-26T02:58:01.676Z"
  },
  {
      "_id": "61f0b8b99b16ef39e2f3675b",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "Rock",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.677Z",
      "updatedAt": "2022-01-26T02:58:01.677Z"
  },
  {
      "_id": "61f0b8b99b16ef39e2f3675c",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "Nhạc Hòa Tấu",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.677Z",
      "updatedAt": "2022-01-26T02:58:01.677Z"
  },
  {
      "_id": "61f0b8b99b16ef39e2f3675d",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "Country",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.677Z",
      "updatedAt": "2022-01-26T02:58:01.677Z"
  },
  {
      "_id": "61f0b8b99b16ef39e2f3675e",
      "description": null,
      "bannerURL": null,
      "isActive": true,
      "isDelete": false,
      "name": "Dance",
      "__v": 0,
      "createdAt": "2022-01-26T02:58:01.677Z",
      "updatedAt": "2022-01-26T02:58:01.677Z"
  }
]

export const formatSongList = (songList) => {
  return songList.map((song) => {
    const result = {}

    if (song['id']) {
      result['id'] = song['id']
    }

    if (song['name']) {
      result['name'] = song['name']
    }

    if (song['download_url']) {
      result['mediaURL'] = song['download_url'] || song['download_url_web']
    }

    if (song['image310']) {
      result['imageURL'] = song['image310'] || song['image']
    }

    if (song['image_path_cover']) {
      result['bannerURL'] = song['image_path_cover']
    }

    if (song['listen_no']) {
      result['view'] = song['listen_no_fake'] || song['listen_no'] 
    }

    result['categoryId'] = categories[randomNumber(categories.length - 1, 0)]._id


    return result
  })
}
