import { resolve as resolvePath } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export const printFileHash = async (currentPath, pathToFile) => {
  return new Promise((resolve, reject) => {
    const resolvedPath = resolvePath(currentPath, pathToFile);
    const hash = createHash('sha256');
    const rs = createReadStream(resolvedPath);
  
    rs.on('error', (err) => reject(err))

    rs.pipe(hash).on('finish', () => {
      console.log(hash.digest('hex'))
      resolve()
    })
  })
}