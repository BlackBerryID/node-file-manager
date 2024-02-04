import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { homedir } from 'os';
import { getUsernameFromArgs } from './utils/index.js';
import { up, cd, ls } from './commands/index.js';

const rl = readline.createInterface({ input, output });
let currentPath = homedir();
const userNameFromArgs = getUsernameFromArgs();
const welcomePhrase = `Welcome to the File Manager, ${userNameFromArgs}! \n`;

console.log(welcomePhrase);
console.log(`You are currently in ${currentPath} \n`);

rl.on('line', (async input => {

  const [command, arg1, arg2] = input.trim().split(' ');

  try {
    switch (command) {
      case '.exit':
        rl.close();
        return;
      case 'up':
        currentPath = up(currentPath);
        break;
      case 'cd':
        currentPath = cd(currentPath, arg1);
        break;
      case 'ls':
        await ls(currentPath);
        break;
    
      default:
        console.log('Invalid input');
    }
  
    console.log(`You are currently in ${currentPath} \n`);
  } catch (err) {
    console.log('Operation failed', err);
  }

}))

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userNameFromArgs}, goodbye!`)
})