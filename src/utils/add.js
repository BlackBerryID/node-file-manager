import { createWriteStream } from 'fs'

export const add = async (newFileName) => {
  return new Promise ((resolve, reject) => {
    const ws = createWriteStream(newFileName)
    ws.end()
    ws.on('finish', resolve)
    ws.on('error', reject)
  })
}