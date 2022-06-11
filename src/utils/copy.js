import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import { pipeline } from 'stream'

export const copy = async (pathToFile, pathToNewDirectory) => {
  return new Promise ((resolve, reject) => {
    const rs = createReadStream(pathToFile)
    const fileName = path.basename(pathToFile)
    const ws = createWriteStream(`${pathToNewDirectory}/${fileName}`)
    
    pipeline(
      rs,
      ws,
      err => {
        reject()
      }
    )
    ws.on('finish', resolve)
  })
}