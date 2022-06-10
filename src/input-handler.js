import { readdir } from 'fs/promises'
import { cat } from './utils/cat.js'

export const inputHandler = async (userInput) => {
  const [firstArg, secondArg] = userInput.split(' ')
  switch (firstArg) {

    case 'up':
      process.chdir('../')
      break

    case 'cd':
      process.chdir(secondArg)
      break

    case 'ls':
      const files = await readdir(process.cwd())
      console.table(files)
      break

    case 'cat': 
      await cat(secondArg)
      break

    default:
      console.log('\x1b[31m%s\x1b[0m', 'Invalid input')
      break
  }
}