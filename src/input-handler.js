import { readdir } from 'fs/promises'
import { create } from './utils/create.js'
import { read } from './utils/read.js'
import { renameFile } from './utils/rename.js'
import { copy } from './utils/copy.js'
import { move } from './utils/move.js'

export const inputHandler = async (userInput) => {
  const [firstArg, ...args] = userInput.split(' ')
  switch (firstArg) {

    case 'up':
      process.chdir('../')
      break

    case 'cd':
      process.chdir(...args)
      break

    case 'ls':
      const files = await readdir(process.cwd())
      console.table(files)
      break

    case 'cat': 
      await read(...args)
      break

    case 'add':
      await create(...args)
      break

    case 'rn':
      await renameFile(...args)
      break

    case 'cp':
      await copy(...args)
      break

    case 'mv': 
      await move(...args)
      break

    default:
      console.log('\x1b[31m%s\x1b[0m', 'Invalid input')
      break
  }
}