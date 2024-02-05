import { createBrotliDecompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { stat } from 'fs/promises';
import { extname, resolve, basename } from 'path';;

export const decompress = async (currentPath, pathToFile, pathToDestination) => {
  const resolvedOldPathToFile = resolve(currentPath, pathToFile)
  const fileExtention = extname(resolvedOldPathToFile)

  if (fileExtention !== '.br') throw new Error('file to decompress must be with .br extention')

  const fileName = basename(resolvedOldPathToFile, fileExtention)
  const resolvedNewPathToDir = resolve(currentPath, pathToDestination)
  const pathToDestionationStatObject = await stat(resolvedNewPathToDir)
  
  if (!pathToDestionationStatObject.isDirectory()) throw new Error('pathToDestination must be a path to directory')

  const resolvedNewPath = resolve(currentPath, pathToDestination, fileName)
  
  const brotliZip = createBrotliDecompress();
  const readStream = createReadStream(resolvedOldPathToFile)
  const writeStream = createWriteStream(resolvedNewPath)

  readStream.pipe(brotliZip).pipe(writeStream)
};