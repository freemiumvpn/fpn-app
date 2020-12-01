import React from 'react'

import AuthLogin from '../../modules/auth/AuthLogin'

import styles from './Login.scss'

const LoginPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.box}>
        <header className={styles.header}>
          <img
            className={styles.img}
            id="prompt-logo-center"
            src="https://raw.githubusercontent.com/fremiumvpn/fpn-app/main/assets/img/fpn.png?raw=true"
            alt="Welcome"
          />
          <h1 className={styles.title}>Welcome</h1>
        </header>

        <div className={styles.body}>
          <div className={styles.text}>It&apos; going to be great!</div>
          <AuthLogin className={styles.button} />
        </div>
      </section>
    </main>
  )
}

export default LoginPage
