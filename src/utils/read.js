import { createReadStream } from 'fs'

export const read = async (pathToFile) => {
  
  return new Promise ((resolve, reject) => {
    const rs = createReadStream(pathToFile)
    let data = ''

    rs.on('data', chunk => data += chunk)
    rs.on('end', () => {
      console.log(data)
      resolve()
    })
    rs.on('error', reject)
  })
}