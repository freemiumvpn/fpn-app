import React from 'react'

import AuthLogout from '../../modules/auth/AuthLogout'
import Logo from '../../modules/brand/Logo/Logo'
import Button from '../../modules/input/Button/Button'

import styles from './Logout.scss'

const LogoutBasePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.box}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <h1 className={styles.title}>See you soon! 👋</h1>
        </header>

        <div className={styles.body}>
          <Button>
            <AuthLogout />
          </Button>
        </div>
      </section>
    </main>
  )
}

export { LogoutBasePage }
