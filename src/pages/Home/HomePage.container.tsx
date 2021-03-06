import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from '../../context/Context'
import { getEnvVars } from '../../env'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

import HomePageBase from './HomePage.base'

const HomePage: React.FC = () => {
  const {
    auth: { auth$ },
    analytics: { analytics$ },
  } = React.useContext(AppContext)
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.HOME,
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

  const handleIosLink = (): void => {
    analytics$.next({
      event: AnalyticsEventType.PAGE_HOME_CLICK_IOS_LINK,
      data: '',
    })
  }

  return <HomePageBase handleIosLink={handleIosLink} />
}

export default HomePage
