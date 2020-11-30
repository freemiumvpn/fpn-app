import React from 'react'

import { getEnvVars } from './env'
import AuthLogin from './modules/auth/AuthLogin'
import AuthLogout from './modules/auth/AuthLogout'
import AuthProfile from './modules/auth/AuthProfile/AuthProfile'
import AuthProvider from './modules/auth/AuthProvider'

const App: React.FC = () => {
  const env = getEnvVars()
  return (
    <AuthProvider
      domain={env.auth0.domain}
      clientId={env.auth0.clientId}
      redirectUri={env.auth0.redirectUri}
    >
      <AuthLogin />
      <AuthLogout />
      <AuthProfile />
    </AuthProvider>
  )
}

export default App
