import readline from 'readline';
import os from 'os';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const username = 'Maxim';
const homeDir = os.homedir()
process.chdir(homeDir)

rl.question(`Welcom to the File Manager, ${username}!\nYou are currently in ${process.cwd()}
`, (answer) => {
  console.log(answer)
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}!`)
})