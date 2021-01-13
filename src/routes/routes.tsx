import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthProvider from '../modules/auth/AuthProvider'
import { getEnvVars } from '../env'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import SplashPage from '../pages/Splash/Splash'
import WelcomePage from '../pages/Welcome/Welcome'
import UserPage from '../pages/User/User'
import SurveyPage from '../pages/Survey/Survey'

enum Path {
  HOME = '/',
  LOGIN = '/login',
  SIGN_UP = '/signup',
  SURVEY = '/survey',

  // TODO
  ABOUT = '/about',
  PRICING = '/pricing',
  USER = '/user',
  WELCOME = '/welcome',
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
          <Route component={LoginPage} path={Path.SIGN_UP} />
          <Route component={UserPage} path={Path.USER} />
          <Route component={WelcomePage} path={Path.WELCOME} />
          <Route component={SurveyPage} path={Path.SURVEY} />
          <Route component={HomePage} />
        </Switch>
      </AuthProvider>
    </React.Suspense>
  )
}

export { Path, Routes as default }
