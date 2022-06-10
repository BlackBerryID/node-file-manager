import readline from 'readline'
import os from 'os'
import path from 'path'
import { readdir } from 'fs/promises'

const username = 'Maxim'
const homeDir = os.homedir()
const rootDir = path.parse(homeDir).root
process.chdir(homeDir)

const inputHandler = async (userInput) => {
  const [firstArg, ...args] = userInput.split(' ')
  switch (firstArg) {

    case 'up':
      process.chdir('../')
      break

    case 'cd':
      // process.chdir('')
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

const oneStep = async (userInput) => {
  if (userInput.trim() === '.exit') {
    rl.close()
    return
  }
  try {
    await inputHandler(userInput)
  } catch (err) {
    console.log('Operation failed')
  }
  rl.setPrompt(`You are currently in ${process.cwd()}\n`)
  rl.prompt()
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Welcom to the File Manager, ${username}!\nYou are currently in ${process.cwd()}\n`, (userInput) => {
  oneStep(userInput)
  rl.on('line', (userInput) => {
    oneStep(userInput)
  })
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}!`)
})
