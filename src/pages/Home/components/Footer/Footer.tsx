import React from 'react'
import { Link } from 'react-router-dom'

import { Path } from '../../../../routes/routes'

import styles from './Footer.scss'

const HomeFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.link} to={Path.HOME}>
          FPN - Designed in London.
        </Link>
        <Link className={styles.link} to={Path.TERMS_AND_CONDITIONS}>
          Terms and Conditions
        </Link>
        <Link className={styles.link} to={Path.PRIVACY_POLICY}>
          Privacy Policy
        </Link>
        <Link className={styles.link} to={Path.MARKETING}>
          Marketing
        </Link>
        <Link className={styles.link} to={Path.SUPPORT}>
          Contact us
        </Link>
      </div>
    </footer>
  )
}

export default HomeFooter
