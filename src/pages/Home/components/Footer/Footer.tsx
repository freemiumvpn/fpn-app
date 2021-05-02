import React from 'react'
import { Link } from 'react-router-dom'

import { Path } from '../../../../routes/routes'

import styles from './Footer.scss'

const HomeFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link className={styles.link} to={Path.HOME}>
              FPN - Designed in London.
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className={styles.link} to={Path.TERMS_AND_CONDITIONS}>
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={Path.PRIVACY_POLICY}>
              Privacy Policy
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className={styles.link} to={Path.MARKETING}>
              Marketing
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={Path.SUPPORT}>
              Contact us
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={Path.FAQ}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default HomeFooter
