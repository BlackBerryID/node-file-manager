import { inputHandler } from './input-handler.js'
import { rl } from './index.js'

export const oneStep = async (userInput) => {

  if (userInput.trim() === '.exit') {
    rl.close()
    return
  }

  try {
    await inputHandler(userInput)
  } catch (err) {
    console.log(err)
    console.log('\x1b[31m%s\x1b[0m', 'Operation failed')
  }

  rl.setPrompt(`You are currently in ${process.cwd()}\n`)
  rl.prompt()
}