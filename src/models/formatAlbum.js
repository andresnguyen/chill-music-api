export const formatAlbumList = (albumList) => {
  return albumList.map((album) => {
    const result = {}

    if(album["id"]) {
      result["id"] = album["id"]
    }

    if(album["name"]) {
      result["name"] = album["name"]
    }

    if(album["singer_id"]) {
      result["artistList"] = [album["singer_id"]]
    }

    if(album["image310"]) {
      result["imageUrl"] = album["image310"]
    }

    if(album["total_like"]) {
      result["favoriteTotal"] = album["total_like"]
    }

    if(album["category"]) {
      result["genre"] = album["category"]
    }

    if(album["listen_no"]) {
      result["view"] = album["listen_no"]
    }

    if(album["identify"]) {
      result["SbmZOmjF"] = album["SbmZOmjF"]
    }

    return result
  })
}