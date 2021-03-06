import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import WelcomePage from '../pages/Welcome/Welcome'
import UserPage from '../pages/User/User'
import SurveyPage from '../pages/Survey/Survey'
import PolicyPage from '../pages/Policy'
import MarketingPage from '../pages/Marketing'
import LogoutPage from '../pages/Logout'
import SupportPage from '../pages/Support'
import TermsPage from '../pages/Terms'
import FAQPage from '../pages/FAQ'

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
  PRIVACY_POLICY = '/privacy-policy',
  TERMS = '/terms',
  TERMS_AND_CONDITIONS = '/terms-and-conditions',

  MARKETING = '/marketing',
  MARKETING_IOS_BETA = '/ios-beta',

  WELCOME = '/welcome',
  SUPPORT = '/support',
  FAQ = '/FAQ',

  // TODO
  ABOUT = '/about',
  PRICING = '/pricing',
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

      <Route component={SupportPage} path={Path.SUPPORT} />
      <Route component={FAQPage} path={Path.FAQ} />

      <Redirect from={Path.POLICY} to={Path.PRIVACY_POLICY} />
      <Route component={PolicyPage} path={Path.PRIVACY_POLICY} />

      <Redirect from={Path.TERMS} to={Path.TERMS_AND_CONDITIONS} />
      <Route component={TermsPage} path={Path.TERMS_AND_CONDITIONS} />

      <Route component={MarketingPage} path={Path.MARKETING} />
      <Route component={MarketingPage} path={Path.MARKETING_IOS_BETA} />

      <Route component={HomePage} />
    </Switch>
  )
}

export { Path, Routes as default }
