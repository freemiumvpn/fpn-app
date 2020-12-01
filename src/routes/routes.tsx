import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthProvider from '../modules/auth/AuthProvider'
import { getEnvVars } from '../env'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import SplashPage from '../pages/Splash/Splash'

enum Path {
  LOGIN = '/login',
  HOME = '/',
}

const Routes: React.FC = () => {
  const env = getEnvVars()

  return (
    <React.Suspense fallback={<SplashPage />}>
      <AuthProvider
        domain={env.auth0.domain}
        clientId={env.auth0.clientId}
        redirectUri={env.auth0.redirectUri}
      >
        <Switch>
          <Route component={LoginPage} path={Path.LOGIN} />
          <Route component={HomePage} />
        </Switch>
      </AuthProvider>
    </React.Suspense>
  )
}

export { Path, Routes as default }
