import { createReadStream, createWriteStream } from 'fs'
import { createBrotliCompress } from 'zlib'
import { pipeline } from 'stream'

export const compress = async (pathToFile, pathToDestination) => {
  return new Promise((resolve, reject) => {
    const rs = createReadStream(pathToFile)
    const br = createBrotliCompress()
    const ws = createWriteStream(pathToDestination)
    pipeline(
      rs,
      br,
      ws,
      err => {
        if (err) {
          reject()
        } else {
          resolve()
        }
      }
    )
  })
}