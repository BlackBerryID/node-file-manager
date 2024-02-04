import { resolve } from 'path';
import { access } from 'fs/promises';
import { handleError } from '../utils/index.js';

export const cd = async (currentPath, destinationPath) => {
  try {
    const resolvedPath = resolve(currentPath, destinationPath);
    await access(resolvedPath);

    return resolvedPath;
  } catch (err) {
    throw err
  }
}