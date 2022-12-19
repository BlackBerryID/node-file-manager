import { createReadStream, createWriteStream } from 'fs'
import {  createBrotliDecompress } from 'zlib'
import { pipeline } from 'stream'

export const decompress = async (pathToFile, pathToDestination) => {
  return new Promise((resolve, reject) => {
    const fileName = path.parse(pathToFile).name;
    const rs = createReadStream(pathToFile)
    const br = createBrotliDecompress()
    const ws = createWriteStream(pathToDestination || `${fileName}.txt`)
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