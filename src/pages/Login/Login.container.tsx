import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom'

import AuthLogin from '../../modules/auth/AuthLogin'
import { Path } from '../../routes/routes'
import SplashPage from '../Splash/Splash'

import styles from './Login.scss'

const LoginPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <SplashPage />
  }

  if (isAuthenticated) {
    return <Redirect to={Path.USER} />
  }

  return (
    <main className={styles.main}>
      <section className={styles.box}>
        <header className={styles.header}>
          <img className={styles.img} src="/assets/img/fpn.png" alt="Welcome" />
          <h1 className={styles.title}>Welcome</h1>
        </header>

        <div className={styles.body}>
          <div className={styles.text}>It&apos; going to be great!</div>
          <AuthLogin />
        </div>
      </section>
    </main>
  )
}

export default LoginPage
