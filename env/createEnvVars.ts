import dotenv from 'dotenv'

const parseEnv = (env: NodeJS.ProcessEnv, keys: string[]): object => {
  return keys.reduce((current, nextKey) => {
    if (!env[nextKey]) {
      return current
    }

    // eslint-disable-next-line no-console
    console.log(`Adding ${nextKey} to env`)
    return {
      ...current,
      [nextKey]: env[nextKey],
    }
  }, {})
}

const createEnvVars = (rootPath: string): string => {
  const envConfig =
    dotenv.config({
      path: `${rootPath}/.env`,
    }).parsed || {}

  const parsedEnv = parseEnv(process.env, Object.keys(envConfig))

  const env = JSON.stringify({
    ...envConfig,
    ...parsedEnv,
  })

  const buff = Buffer.from(env)
  const base64data = buff.toString('base64')

  return base64data
}

const createEnvFile = (envVars: string): string => `
/**
  This is an auto generated file!
*/
window.__ENV__ = "${envVars}"
`

export { createEnvFile, createEnvVars as default }
