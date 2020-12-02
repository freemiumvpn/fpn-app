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
          <a>LOGO</a>
          <ul className={styles.nav}>
            <li>
              <Link to={Path.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={Path.PRICING}>Pricing</Link>
            </li>
          </ul>
          <div className={styles.signInActions}>
            <Link className={styles.login} to={Path.LOGIN}>
              Login
            </Link>
            <Link className={styles.signUp} to={Path.SIGN_UP}>
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <div className={classnames(styles.body, styles.content)}>
        <div>
          <Logo className={styles.logo} />
        </div>
        <h1 className={styles.title}>Get started with FPN today.</h1>
        <p className={styles.text}>
          FPN is a fast an secure freemium VPN you will enjoy
        </p>
        <ButtonLink to={Path.SIGN_UP}> Sign up for free 🚀</ButtonLink>
      </div>

      <footer></footer>
    </div>
  )
}

export default HomePageBase
