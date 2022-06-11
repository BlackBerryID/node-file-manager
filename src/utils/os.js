import { EOL, cpus } from 'os'

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