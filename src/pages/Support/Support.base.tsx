import React from 'react'
import classnames from 'classnames'

import HomeFooter from '../Home/components/Footer/Footer'
import HomeHeader from '../Home/components/Header'
import ProductHunt from '../../shared/components/ProductHunt'

import styles from './Support.scss'
import { SupportForm } from './components/Form'

const SupportBasePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <HomeHeader classes={{ container: styles.section }} />

      <div className={styles.body}>
        <section className={styles.introduction}>
          <h1 className={styles.title}>Have a question?</h1>
          <p className={styles.body}>Ask us below 🛎️</p>
        </section>

        <SupportForm />

        <div className={styles.introductionCta}>
          <ProductHunt />
        </div>
      </div>

      <HomeFooter
        classes={{
          container: classnames(styles.headerContainer, styles.section),
        }}
      />
    </div>
  )
}

export { SupportBasePage }
