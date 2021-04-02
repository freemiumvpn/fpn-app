import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from '../../context/Context'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

import { LogoutBasePage } from './Logout.base'

const LogoutPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0()
  const {
    analytics: { analytics$ },
  } = React.useContext(AppContext)

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.LOGOUT,
    })
  }, [analytics$])

  if (isLoading) {
    return <SplashPage />
  }

  if (!isAuthenticated) {
    return <Redirect to={Path.HOME} />
  }

  return <LogoutBasePage />
}

export { LogoutPage }
