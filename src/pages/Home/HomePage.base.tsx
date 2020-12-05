import React from 'react'
import classnames from 'classnames'

import { Path } from '../../routes/routes'
import ButtonLink from '../../modules/input/ButtonLink/ButtonLink'
import Logo from '../../modules/brand/Logo/Logo'

import HomeHeader from './components/Header/Header'
import HomeFooter from './components/Footer/Footer'
import HomePricing from './components/HomePricing'
import styles from './Home.scss'

const HomePageBase: React.FC = () => {
  return (
    <div className={styles.main}>
      <HomeHeader classes={{ container: styles.content }} />

      <div className={classnames(styles.body)}>
        <div className={classnames(styles.content, styles.bodyContent)}>
          <Logo className={styles.logo} />
          <h1 className={styles.title}>Get started with FPN today.</h1>
          <p className={styles.text}>
            FPN is a fast, secure and simple freemium VPN you will enjoy
          </p>
          <ButtonLink className={styles.button} to={Path.SIGN_UP}>
            {' '}
            Sign up for free 🚀
          </ButtonLink>
        </div>
      </div>

      <HomePricing classes={{ container: styles.content }} />

      <HomeFooter
        classes={{
          container: classnames(styles.headerContainer, styles.content),
        }}
      />
    </div>
  )
}

export default HomePageBase
