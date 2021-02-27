import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

import { getEnvVars } from '../../../env'

const env = getEnvVars()

const AuthProvider: React.FC = props => {
  return (
    <Auth0Provider
      domain={env.auth0.domain}
      clientId={env.auth0.clientId}
      audience={env.auth0.audience}
      scope={env.auth0.scope}
      redirectUri={env.auth0.redirectUri}
    >
      {props.children}
    </Auth0Provider>
  )
}

export { AuthProvider }
