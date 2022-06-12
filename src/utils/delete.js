import { rm } from 'fs/promises'

export const remove = async (pathToFile) => {
  await rm(pathToFile)
}