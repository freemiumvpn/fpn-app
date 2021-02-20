import React from 'react'

import Logo from '../../../../modules/brand/Logo/Logo'

import styles from './WelcomeStart.scss'

const WelcomeStart: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <h1>Welcome to FPN</h1>
      </header>
      <div className={styles.content}>
        <p className={styles.legend}>
          Connect to private networks across the globe.
        </p>
      </div>
    </div>
  )
}

export { WelcomeStart }
