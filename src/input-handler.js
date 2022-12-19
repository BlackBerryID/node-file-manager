import { readdir, stat } from 'fs/promises'
import { create } from './utils/create.js'
import { read } from './utils/read.js'
import { renameFile } from './utils/rename.js'
import { copy } from './utils/copy.js'
import { move } from './utils/move.js'
import { remove } from './utils/delete.js'
import { getEOL, getCPUS, getHomeDir, getSystemUserName, getArchitecture } from './utils/os.js'
import { calcHash } from './utils/hash.js'
import { compress } from './utils/compress.js'
import { decompress } from './utils/decompress.js'

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
      let filesTypes = await Promise.all(files.map(async (item) => (await stat(item)).isDirectory()))
      filesTypes = filesTypes.map(item => item ? 'directory' : 'file')
      const resultTable = files.reduce((acc, current, index) => {
        acc.push({
          Name: current,
          File: filesTypes[index]
        })
        return acc
      }, [])
      console.table(resultTable)
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

    case 'rm':
      await remove(...args)
      break

    case 'os':
      switch ([...args][0]) {
        case '--EOL':
          getEOL()
          break
      
        case '--cpus':
          getCPUS()
          break

        case '--homedir': 
          getHomeDir()
          break

        case '--username':
          getSystemUserName()
          break

        case '--architecture':
          getArchitecture()
          break

        default:
          console.log('\x1b[31m%s\x1b[0m', 'Invalid input')
          break
      }
      break

    case 'hash':
      await calcHash(...args)
      break

    case 'compress':
      await compress(...args)
      break

    case 'decompress':
      await decompress(...args)
      break

    default:
      console.log('\x1b[31m%s\x1b[0m', 'Invalid input')
      break
  }
}