import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import { Path } from '../../routes/routes'
import ButtonLink from '../../modules/input/ButtonLink/ButtonLink'
import Logo from '../../modules/brand/Logo/Logo'

import styles from './Home.scss'

const HomePageBase: React.FC = () => {
  return (
    <div className={styles.main}>
      <header className={classnames(styles.header)}>
        <div className={classnames(styles.headerContainer, styles.content)}>
          <Link className={styles.link} to={Path.HOME}>
            FPN
          </Link>
          <ul className={styles.nav}>
            <li>
              <Link to={Path.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={Path.PRICING}>Pricing</Link>
            </li>
          </ul>
          <div className={styles.signInActions}>
            <Link className={styles.link} to={Path.LOGIN}>
              Login
            </Link>
            <ButtonLink className={styles.signUp} to={Path.SIGN_UP}>
              Sign Up
            </ButtonLink>
          </div>
        </div>
      </header>

      <div className={classnames(styles.body)}>
        <div className={classnames(styles.content, styles.bodyContent)}>
          <Logo className={styles.logo} />
          <h1 className={styles.title}>Get started with FPN today.</h1>
          <p className={styles.text}>
            FPN is a fast an secure freemium VPN you will enjoy
          </p>
          <ButtonLink className={styles.button} to={Path.SIGN_UP}>
            {' '}
            Sign up for free 🚀
          </ButtonLink>
        </div>
      </div>

      <footer></footer>
    </div>
  )
}

export default HomePageBase
