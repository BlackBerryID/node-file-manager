import { open } from 'fs/promises';
import { join } from 'path';

export const add = async (currentPath, fileName) => {
  const fileHandle = await open(join(currentPath, fileName), 'w');
  fileHandle.close();
}