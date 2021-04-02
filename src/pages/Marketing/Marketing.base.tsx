import React from 'react'
import classnames from 'classnames'

import HomeFooter from '../Home/components/Footer/Footer'
import HomeHeader from '../Home/components/Header'
import ButtonLink from '../../modules/input/ButtonLink/ButtonLink'
import { Path } from '../../routes/routes'
import { MvpFeatures } from '../Welcome/components/MvpFeatures/MvpFeatures'

import styles from './Marketing.scss'

const MarketingBasePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <HomeHeader classes={{ container: styles.content }} />

      <section className={styles.introduction}>
        <h1 className={styles.title}>
          An initiative to provide secure networks across the globe.
        </h1>
        <p className={styles.body}>
          Our goal is to provide a fast, transparent and secure service.
        </p>
        <div className={styles.features}>
          <MvpFeatures />
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src="https://user-images.githubusercontent.com/4896851/113365554-7a171f80-934e-11eb-9b02-b34fb0fcd560.png"
            />
          </div>
        </div>
      </section>

      <div className={styles.actions}>
        <ButtonLink className={styles.button} to={Path.SIGN_UP}>
          {' '}
          Sign up for free 🚀
        </ButtonLink>
      </div>

      <HomeFooter
        classes={{
          container: classnames(styles.headerContainer, styles.content),
        }}
      />
    </div>
  )
}

export { MarketingBasePage }
