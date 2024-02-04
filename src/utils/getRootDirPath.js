import { parse } from "path"

export const getRootDirPath = (pathToCurrentDir) => parse(pathToCurrentDir).root;