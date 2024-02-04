import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getCurrentDirPath = (metaUrl) => {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = dirname(__filename);

  return __dirname;
}