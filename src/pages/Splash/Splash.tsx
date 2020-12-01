import React from 'react'
import classnames from 'classnames'

import styles from './Splash.scss'

const SplashPage: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div
          className={classnames(styles.shadow, styles.shadowAnimation)}
        ></div>
        <div
          className={classnames(styles.circle, styles.circleAnimation)}
        ></div>
        <div
          className={classnames(styles.innerCircle, styles.circleAnimation)}
        ></div>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>FPN</div>
        <div className={styles.legend}>The Freemium VPN</div>
      </div>
    </div>
  )
}

export default SplashPage
