import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { getUsernameFromArgs, getCurrentDirPath, getRootDirPath } from './utils/index.js';
import { homedir } from 'os';
import { resolve } from 'path';

const rl = readline.createInterface({ input, output });
let currentPath = homedir();
const userNameFromArgs = getUsernameFromArgs();
const welcomePhrase = `Welcome to the File Manager, ${userNameFromArgs}! \n`;

console.log(welcomePhrase);
console.log(`You are currently in ${currentPath} \n`);

// console.log('getCurrentDirPath: ', getCurrentDirPath(import.meta.url))

// rl.setPrompt(`You are currently in ${currentPath} \n`)

// const w = rl.prompt()

rl.on('line', (input => {

  try {
    switch (input.trim()) {
      case '.exit':
        rl.close();
        return;
      case 'up':
        currentPath = resolve(currentPath, '../');
        break;
    
      default:
        console.log('Invalid input');
    }
  
    console.log(`You are currently in ${currentPath} \n`);
  } catch (err) {
    console.log('Operation failed');
  }

}))

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userNameFromArgs}, goodbye!`)
})