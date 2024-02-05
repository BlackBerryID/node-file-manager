import { createBrotliCompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { stat } from 'fs/promises';
import { resolve, basename } from 'path';;

export const compress = async (currentPath, pathToFile, pathToDestination) => {
  const resolvedOldPathToFile = resolve(currentPath, pathToFile)
  const fileName = basename(resolvedOldPathToFile)
  const resolvedNewPathToDir = resolve(currentPath, pathToDestination)
  const pathToDestionationStatObject = await stat(resolvedNewPathToDir)

  if (!pathToDestionationStatObject.isDirectory()) throw new Error('pathToDestination must be a path to directory')

  const resolvedNewPath = resolve(currentPath, pathToDestination, `${fileName}.br`)
  
  const brotliZip = createBrotliCompress();
  const readStream = createReadStream(resolvedOldPathToFile)
  const writeStream = createWriteStream(resolvedNewPath)

  readStream.pipe(brotliZip).pipe(writeStream)
};