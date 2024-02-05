import { userInfo } from "os"

export const printUsername = () => console.log(userInfo().username)