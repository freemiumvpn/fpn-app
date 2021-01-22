import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
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
  return (
    <Switch>
      <Route component={LoginPage} path={Path.LOGIN} />
      <Route component={LoginPage} path={Path.SIGN_UP} />
      <Route component={UserPage} path={Path.USER} />
      <Route component={WelcomePage} path={Path.WELCOME} />
      <Route component={SurveyPage} path={Path.SURVEY} />
      <Route component={HomePage} />
    </Switch>
  )
}

export { Path, Routes as default }
