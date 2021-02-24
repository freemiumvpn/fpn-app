import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from '../../context/Context'
import { getEnvVars } from '../../env'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

const UserPage: React.FC = () => {
  const {
    auth: { auth$ },
    analytics: { analytics$ },
  } = React.useContext(AppContext)
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.USER,
    })
  }, [analytics$])

  useEffect(() => {
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

  if (!isAuthenticated) {
    return <Redirect to={Path.LOGIN} />
  }

  return <Redirect to={Path.WELCOME} />
}

export default UserPage
