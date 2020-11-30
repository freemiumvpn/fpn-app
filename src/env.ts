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

const getEnvVars = (): Env => {
  return {
    auth0: {
      domain: process.env.AUTH0_DOMAIN || '',
      clientId: process.env.AUTH0_CLIENT_ID || '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
      redirectUri: process.env.AUTH0_REDIRECT_URI || '',
    },
  }
}

export { getEnvVars, Env, EnvKey }
