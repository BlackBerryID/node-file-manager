import { createReadStream, createWriteStream } from "fs"
import { resolve, basename, dirname } from "path"
import { pipeline } from "stream/promises"

export const cp = async (currentPath, pathToFile, pathToNewDirectory) => {
  const resolvedOldPathToFile = resolve(currentPath, pathToFile)
  const fileName = basename(resolvedOldPathToFile)
  const dirPath = dirname(resolvedOldPathToFile)

  const resolvedNewPath = resolve(dirPath, pathToNewDirectory, fileName)

  const rs = createReadStream(resolvedOldPathToFile)
  const ws = createWriteStream(resolvedNewPath)

  await pipeline(rs, ws)
}