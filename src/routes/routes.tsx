import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import WelcomePage from '../pages/Welcome/Welcome'
import UserPage from '../pages/User/User'
import SurveyPage from '../pages/Survey/Survey'
import PolicyPage from '../pages/Policy'
import MarketingPage from '../pages/Marketing'
import LogoutPage from '../pages/Logout'

enum Path {
  HOME = '/',
  LOGIN = '/login',
  LOGOUT = '/logout',
  SIGN_UP = '/signup',
  SURVEY = '/survey',

  /**
   * User Dashboard
   */
  USER = '/user',
  USER_DASHBOARD_PROFILE = '/user/profile',
  USER_DASHBOARD_VPN = '/user/vpn',

  POLICY = '/policy',
  MARKETING = '/marketing',

  // TODO
  ABOUT = '/about',
  PRICING = '/pricing',
  WELCOME = '/welcome',
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={LoginPage} path={Path.LOGIN} />
      <Route component={LoginPage} path={Path.SIGN_UP} />
      <Route component={LogoutPage} path={Path.LOGOUT} />

      <Route component={UserPage} path={Path.USER} />
      <Route component={WelcomePage} path={Path.WELCOME} />
      <Route component={SurveyPage} path={Path.SURVEY} />

      <Route component={PolicyPage} path={Path.POLICY} />
      <Route component={MarketingPage} path={Path.MARKETING} />

      <Route component={HomePage} />
    </Switch>
  )
}

export { Path, Routes as default }
