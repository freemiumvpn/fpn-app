import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from '../../context/Context'
import { getEnvVars } from '../../env'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

import { LoginPageBase } from './Login.base'

const LoginPage: React.FC = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const {
    auth: { auth$ },
    analytics: { analytics$ },
  } = React.useContext(AppContext)

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.LOGIN,
    })
  }, [analytics$])

  React.useEffect(() => {
    if (isLoading || !isAuthenticated) return

    const {
      auth0: { audience, scope },
    } = getEnvVars()
    getAccessTokenSilently({ audience, scope }).then(token => {
      auth$.next({ token })
    })
  }, [isLoading, isAuthenticated, getAccessTokenSilently, auth$])

  if (isLoading) {
    return <SplashPage />
  }

  if (isAuthenticated) {
    return <Redirect to={Path.USER} />
  }

  return <LoginPageBase />
}

export default LoginPage
