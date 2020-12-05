import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'

import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

import HomePageBase from './HomePage.base'

const HomePage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <SplashPage />
  }

  if (isAuthenticated) {
    return <Redirect to={Path.USER} />
  }

  return <HomePageBase />
}

export default HomePage
