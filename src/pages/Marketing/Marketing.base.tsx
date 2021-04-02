import React from 'react'
import classnames from 'classnames'

import HomeFooter from '../Home/components/Footer/Footer'
import HomeHeader from '../Home/components/Header'
import { MvpFeatures } from '../Welcome/components/MvpFeatures/MvpFeatures'
import ProductHunt from '../../shared/components/ProductHunt'
import Button from '../../modules/input/Button/Button'

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

      <div className={styles.actions}>
        <Button className={styles.button}>
          <a
            href="https://testflight.apple.com/join/Tuqm3ka1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Beta Test 🚀
          </a>
        </Button>
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
