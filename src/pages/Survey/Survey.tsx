import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'

import { getEnvVars } from '../../env'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'
import Header from '../../modules/brand/Header/Header'

import styles from './Survey.scss'

const SurveyPage: React.FC = () => {
  const { isAuthenticated, isLoading, user } = useAuth0()

  if (isLoading) {
    return <SplashPage />
  }

  if (!isAuthenticated) {
    return <Redirect to={Path.LOGIN} />
  }

  const {
    offerWall: { clientSecret, redirectUri },
  } = getEnvVars()

  const userId = user.email || Math.random()
  const src = `${redirectUri}?api_key=${clientSecret}&user_id=${userId}`

  return (
    <div className={styles.container}>
      <Header />
      <iframe src={src} className={styles.frame} />
    </div>
  )
}

export default SurveyPage
