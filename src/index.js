import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { homedir } from 'os';
import { getUsernameFromArgs, handleError } from './utils/index.js';
import { up, cd, ls, cat, add, rn } from './commands/index.js';

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
        const newPath = await cd(currentPath, arg1);
        if (newPath) currentPath = newPath;
        break;
      case 'ls':
        await ls(currentPath);
        break;
      case 'cat':
        await cat(currentPath, arg1);
        break;
      case 'add':
        await add(currentPath, arg1);
        break;
      case 'rn':
        await rn(currentPath, arg1, arg2);
        break;

      default:
        console.log('Invalid input');
    }
  
    console.log(`You are currently in ${currentPath} \n`);
  } catch (err) {
    // console.log('err: ', err)
    handleError(err);
  }

}))

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userNameFromArgs}, goodbye!`)
})