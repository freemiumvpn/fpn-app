import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Context from '../../context/Context'
import { getEnvVars } from '../../env'
import AuthProfile from '../../modules/auth/AuthProfile/AuthProfile'
import Header from '../../modules/brand/Header/Header'
import Ping from '../../modules/ping/components/Ping/Ping'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

import styles from './User.scss'

const UserPage: React.FC = () => {
  const {
    auth: { auth$ },
  } = React.useContext(Context)
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

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

  return (
    <div>
      <Ping />
      <Header />
      <section className={styles.section}>
        <AuthProfile />
        <Link to={Path.SURVEY}>Survey</Link>
      </section>
    </div>
  )
}

export default UserPage
