import React from 'react'
import classnames from 'classnames'

import HomeHeader from '../Home/components/Header/Header'
import HomeFooter from '../Home/components/Footer/Footer'

import styles from './Policy.scss'
import PolicyContent from './components/PolicyContent'

const PolicyBase: React.FC = () => {
  return (
    <div className={styles.main}>
      <HomeHeader classes={{ container: styles.content }} />

      <div className={styles.body}>
        <PolicyContent />
      </div>

      <HomeFooter
        classes={{
          container: classnames(styles.headerContainer, styles.content),
        }}
      />
    </div>
  )
}

export { PolicyBase }
