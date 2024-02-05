import { cpus } from "os"

export const printCPUsInfo = () => {
  const CPUsInfo = cpus()
  const result = CPUsInfo.map(cpuInfo => Object.assign({}, {model: cpuInfo.model.trim(), speed: `${(cpuInfo.speed / 1000).toFixed(2)} GHz`}))

  console.table(result)
}