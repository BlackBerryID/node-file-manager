import { createReadStream } from "fs"
import { resolve as resolvePath } from 'path';

export const cat = (currentPath, pathToFile) => {

  return new Promise((resolve, reject) => {
    const rs = createReadStream(resolvePath(currentPath, pathToFile));
  
    let data = '';
  
    rs.on('data', (chunk) => {
      data += chunk;
    })
  
    rs.on('end', () => {
      console.log(data + '\n')
      resolve()
    })

    rs.on('error', (err) => {
      reject(err)
    })
  })
}