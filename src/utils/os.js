import { EOL, cpus, homedir, userInfo, arch } from 'os'

export const getEOL = () => {
  console.log(JSON.stringify(EOL))
}

export const getCPUS = () => {
  const cpuCores = cpus().map(cpuCore => ({
    ...cpuCore,
    clockRateInGHz: cpuCore.speed / 1000,
  }))
  console.log(`Amount of CPUS: ${cpuCores.length}`)
  console.table(cpuCores, ['model', 'clockRateInGHz'])
}

export const getHomeDir = () => {
  console.log(homedir())
}

export const getSystemUserName = () => {
  console.log(userInfo().username)
}

export const getArchitecture = () => {
  console.log(arch())
}
