import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import AuthProfile from '../../modules/auth/AuthProfile/AuthProfile'
import Header from '../../modules/brand/Header/Header'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

import styles from './User.scss'

const UserPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <SplashPage />
  }

  if (!isAuthenticated) {
    return <Redirect to={Path.LOGIN} />
  }

  return (
    <div>
      <Header />
      <section className={styles.section}>
        <AuthProfile />
        <Link to={Path.SURVEY}>Survey</Link>
      </section>
    </div>
  )
}

export default UserPage
