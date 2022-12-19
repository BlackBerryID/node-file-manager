import { createReadStream, createWriteStream } from 'fs'
import { createBrotliCompress } from 'zlib'
import { pipeline } from 'stream'
import path from 'path'

export const compress = async (pathToFile, pathToDestination) => {
  return new Promise((resolve, reject) => {
    const fileName = path.parse(pathToFile).name;
    const rs = createReadStream(pathToFile)
    const br = createBrotliCompress()
    const ws = createWriteStream(pathToDestination || `${fileName}.br`)
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