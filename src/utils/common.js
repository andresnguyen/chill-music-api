export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min))
}

export const random = (max) => {
  let n1 = randomNumber(0, max)
  while (n1 - 5 < 0) {
    n1 = randomNumber(0, max)
  }

  return [n1 - 5, n1]
}

export const randomSong = (min, max, size) => {
  const result = new Set()
  while (result.size < size) {
    result.add(randomNumber(min, max))
  }

  return [...result]
}
