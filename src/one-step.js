import { inputHandler } from './input-handler.js'

export const oneStep = async (userInput) => {

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