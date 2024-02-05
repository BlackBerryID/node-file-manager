import { rm as remove } from "fs/promises"
import { resolve } from "path"

export const rm = async (currentPath, pathToFile) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile)
  await remove(resolvedPathToFile)
}