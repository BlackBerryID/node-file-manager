import { rename } from 'fs/promises'

export const renameFile = async (pathToFile, newFilename) => {
  await rename(pathToFile, newFilename)
}