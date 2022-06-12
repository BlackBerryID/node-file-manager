import os from 'os'

export const username = process.argv[2] ? process.argv[2].split('=')[1] : 'Stranger'
export const homeDir = os.homedir()