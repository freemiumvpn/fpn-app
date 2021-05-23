import React from 'react'
import classnames from 'classnames'
import Link from '@material-ui/core/Link'

import Logo from '../../modules/brand/Logo/Logo'
import { AppStore } from '../../modules/icon/AppStore/AppStore'
import { MvpFeatures } from '../Welcome/components/MvpFeatures/MvpFeatures'
import ProductHunt from '../../shared/components/ProductHunt'

import HomeHeader from './components/Header'
import HomeFooter from './components/Footer/Footer'
import styles from './Home.scss'

interface HomePageBaseProps {
  handleIosLink: () => void
}

const HomePageBase: React.FC<HomePageBaseProps> = ({ handleIosLink }) => {
  return (
    <div className={styles.main}>
      <HomeHeader classes={{ container: styles.content }} />

      <div className={classnames(styles.body)}>
        <div className={classnames(styles.content, styles.bodyContent)}>
          <Logo className={styles.logo} />
          <h1 className={styles.title}>Get started with FPN today.</h1>
          <p className={styles.text}>
            FPN is a fast, secure and simple VPN you will enjoy
          </p>
          <Link
            href={'https://apps.apple.com/gb/app/fpn/id1561044840'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleIosLink}
          >
            <AppStore className={styles.iosButton} />
          </Link>
        </div>
      </div>

      <section className={styles.introduction}>
        <h1 className={styles.title}>
          An initiative to provide secure networks across the globe.
        </h1>
        <p className={styles.subtitle}>
          Our goal is to provide a fast, transparent and secure service.
        </p>
        <div className={styles.introductionCta}>
          <ProductHunt />
        </div>
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

      <HomeFooter />
    </div>
  )
}

export default HomePageBase
