export const formatSongList = (songList) => {
  return songList.map((song) => {
    const result = {}

    if(song["id"]) {
      result["id"] = song["id"]
    }

    if(song["name"]) {
      result["name"] = song["name"]
    }

    if(song["media_url"]) {
      result["mediaUrl"] = song["media_url"]
    }

    if(!song["media_url"] && song["download_url"]) {
      result["mediaUrl"] = song["download_url"]
    }

    if(song["image310"]) {
      result["imageUrl"] = song["image310"]
    }

    if(song["image_path_cover"]) {
      result["bannerUrl"] = song["image_path_cover"]
    }

    if(song["category"]) {
      result["genre"] = song["category"]
    }

    if(song["singer_id"]) {
      result["artistList"] = [song["singer_id"]]
    }

    if(song["listen_no"]) {
      result["view"] = song["listen_no"]
    }

    if(song["is_downloadable"]) {
      result["isDownloadable"] = (song["is_downloadable"] === 1)
    }

    return result
  })
}