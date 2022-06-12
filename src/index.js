import readline from 'readline'
import { username, homeDir } from './constants.js'
import { oneStep } from './one-step.js'

process.chdir(homeDir)

export const rl = readline.createInterface({
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