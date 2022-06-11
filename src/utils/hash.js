import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export const calcHash = async (pathToFile) => {
  return new Promise((resolve, reject) => {
    let data = ''
    const hash = createHash('sha256')
    const rs = createReadStream(pathToFile)
    
    rs.on('data', chunk => data += chunk)
    rs.on('end', () => {
      hash.update(data)
      console.log(hash.digest('hex'))
      resolve()
    })
    rs.on('error', reject)
  })
}