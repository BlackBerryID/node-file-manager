import { rename } from "fs/promises"
import { resolve, dirname } from "path"

export const rn = async (currentPath, pathToFile, newFileName) => {
  try {
    const resolvedOldPathToFile = resolve(currentPath, pathToFile)
    const dirPath = dirname(resolvedOldPathToFile)
    const resolvedNewPathToFile = resolve(dirPath, newFileName)
  
    await rename(resolvedOldPathToFile, resolvedNewPathToFile)
  } catch (err) {
    throw err
  }
}