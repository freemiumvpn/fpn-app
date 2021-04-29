import React from 'react'

import HomeHeader from '../Home/components/Header'
import HomeFooter from '../Home/components/Footer/Footer'

import styles from './Terms.scss'
import PolicyContent from './components/TermsContent'

const PolicyBase: React.FC = () => {
  return (
    <div className={styles.main}>
      <HomeHeader classes={{ container: styles.content }} />

      <div className={styles.body}>
        <PolicyContent />
      </div>

      <HomeFooter />
    </div>
  )
}

export { PolicyBase as TermsBase }
