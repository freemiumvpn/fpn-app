/***
 * Attempts to retrieve env variables from process.env
 * or injected as a base64 argument in the window
 */

interface DynamicEnv extends Window {
  __ENV__: string
}

const parseEnv = (
  env = (window as DynamicEnv & typeof globalThis).__ENV__
): Record<EnvKey, string> => {
  let injectedEnv = {}

  if (env) {
    try {
      injectedEnv = JSON.parse(window.atob(env))
    } catch (error) {
      console.log('Failed to parse env vars', { env }, error)
    }
  }

  /**
   * Setting a reference allows us to use
   * runtime variables by circumventing
   * Webpack's DefinePlugin
   */
  const processEnv = process['env']

  return {
    ...processEnv,
    ...injectedEnv,
  } as Record<EnvKey, string>
}

enum EnvKey {
  AUTH0_DOMAIN = 'AUTH0_DOMAIN',
  AUTH0_CLIENT_ID = 'AUTH0_CLIENT_ID',
  AUTH0_CLIENT_SECRET = 'AUTH0_CLIENT_SECRET',
  AUTH0_REDIRECT_URI = 'AUTH0_REDIRECT_URI',
}

interface Env {
  auth0: {
    domain: string
    clientId: string
    clientSecret: string
    redirectUri: string
  }
}

const getEnvVars = (env = parseEnv()): Env => {
  return {
    auth0: {
      domain: env.AUTH0_DOMAIN,
      clientId: env.AUTH0_CLIENT_ID,
      clientSecret: env.AUTH0_CLIENT_SECRET,
      redirectUri: env.AUTH0_REDIRECT_URI,
    },
  }
}

export { getEnvVars, Env, EnvKey, parseEnv }
