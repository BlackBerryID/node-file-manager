import { createReadStream, createWriteStream } from 'fs'
import { rm } from 'fs/promises'
import path from 'path'
import { pipeline } from 'stream'

export const move = async (pathToFile, pathToNewDirectory) => {
  return new Promise ((resolve, reject) => {
    const rs = createReadStream(pathToFile)
    const fileName = path.basename(pathToFile)
    const ws = createWriteStream(`${pathToNewDirectory}/${fileName}`)
    
    pipeline(
      rs,
      ws,
      err => {
        if (err) {
          reject()
        } else {
          rm(pathToFile).then(resolve)
        }
      }
    )
  })
}