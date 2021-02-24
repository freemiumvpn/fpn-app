import { logger } from './middlewares/logger/Logger'
import memoise from './shared/utils/memoise'

/***
 * Attempts to retrieve env variables from process.env
 * or injected as a base64 argument in the window
 */
interface CustomWindow extends Window {
  __ENV__: string
}

const parseEnv = (
  env = (window as CustomWindow & typeof globalThis).__ENV__
): Record<EnvKey, string> => {
  let injectedEnv = {}

  if (env) {
    try {
      injectedEnv = JSON.parse(window.atob(env))
    } catch (error) {
      logger.error('Failed to parse env vars', { env }, error)
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
  AUTH0_AUDIENCE = 'AUTH0_AUDIENCE',
  AUTH0_SCOPE = 'AUTH0_SCOPE',

  /**
   * GQL
   */
  GQL_URL = 'GQL_URL',
  GQL_WEB_SOCKET_URL = 'GQL_WEB_SOCKET_URL',

  /**
   * OFFER WALL
   */
  OFFER_WALL_CLIENT_SECRET = 'OFFER_WALL_CLIENT_SECRET',
  OFFER_WALL_URI = 'OFFER_WALL_URI',
}

interface Env {
  auth0: {
    domain: string
    clientId: string
    clientSecret: string
    redirectUri: string
    audience: string
    scope: string
  }
  offerWall: {
    clientSecret: string
    redirectUri: string
  }
  api: {
    retry: number
    retryDelay: number
    timeout: number
  }
  gql: {
    url: string
    webSocketUrl: string
  }
}

const createEnvVars = (env = parseEnv()): Env => {
  return {
    auth0: {
      domain: env.AUTH0_DOMAIN || '',
      clientId: env.AUTH0_CLIENT_ID || '',
      clientSecret: env.AUTH0_CLIENT_SECRET || '',
      redirectUri: env.AUTH0_REDIRECT_URI || '',
      audience: env.AUTH0_AUDIENCE || '',
      scope: env.AUTH0_SCOPE || '',
    },
    api: {
      retry: 3,
      retryDelay: 1000,
      timeout: 1000,
    },
    gql: {
      url: env.GQL_URL || '',
      webSocketUrl: env.GQL_WEB_SOCKET_URL || '',
    },
    offerWall: {
      clientSecret: env.OFFER_WALL_CLIENT_SECRET || '',
      redirectUri: env.OFFER_WALL_URI || '',
    },
  }
}

const getEnvVars = memoise(createEnvVars)

export { getEnvVars, Env, EnvKey, parseEnv }
