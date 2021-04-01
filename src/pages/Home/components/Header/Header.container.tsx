import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

import HomeHeader from './Header'

interface HeaderProps {
  classes: {
    container: string
  }
}

export enum HomeHeaderAuth {
  LOADING,
  AUTHENTICATED,
  UNAUTHENTICATED,
}

const HomeHeaderContainer: React.FC<HeaderProps> = props => {
  const { isAuthenticated, isLoading } = useAuth0()
  const isUserAuthenticated = isAuthenticated
    ? HomeHeaderAuth.AUTHENTICATED
    : HomeHeaderAuth.UNAUTHENTICATED

  const authStatus = isLoading ? HomeHeaderAuth.LOADING : isUserAuthenticated

  return <HomeHeader {...props} authStatus={authStatus} />
}

export { HomeHeaderContainer }
