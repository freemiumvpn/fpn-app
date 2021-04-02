import React from 'react'

import AuthLogin from '../../modules/auth/AuthLogin'
import Logo from '../../modules/brand/Logo/Logo'

import styles from './Login.scss'

const LoginPageBase: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.box}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
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

export { LoginPageBase }
