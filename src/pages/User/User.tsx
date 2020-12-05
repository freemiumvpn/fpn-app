import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'

import AuthProfile from '../../modules/auth/AuthProfile/AuthProfile'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

const UserPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <SplashPage />
  }

  if (!isAuthenticated) {
    return <Redirect to={Path.LOGIN} />
  }

  return <AuthProfile />
}

export default UserPage
