import { createReadStream, createWriteStream } from "fs"
import { resolve, basename } from "path"
import { pipeline } from "stream/promises"

export const cp = async (currentPath, pathToFile, pathToNewDirectory) => {
  const resolvedOldPathToFile = resolve(currentPath, pathToFile)
  const fileName = basename(resolvedOldPathToFile)

  const resolvedNewPath = resolve(currentPath, pathToNewDirectory, fileName)

  const rs = createReadStream(resolvedOldPathToFile)
  const ws = createWriteStream(resolvedNewPath, {flags: 'wx'})

  await pipeline(rs, ws)
}