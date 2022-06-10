import { readdir } from 'fs/promises'

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

    default:
      console.log('Invalid input')
      break
  }
}