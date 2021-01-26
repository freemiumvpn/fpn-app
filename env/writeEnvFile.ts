import fs from 'fs'
import path from 'path'

import createEnvVars, { createEnvFile } from './createEnvVars'

const writeEnvFile = async (path: string): Promise<void> => {
  const envVars = createEnvVars(path)
  await fs.promises.writeFile(`${path}/env.js`, createEnvFile(envVars))
}

const PATH_ROOT = path.resolve(__dirname, '..')

writeEnvFile(PATH_ROOT)
