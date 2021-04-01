import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import { Path } from '../../../../routes/routes'
import ButtonLink from '../../../../modules/input/ButtonLink/ButtonLink'

import styles from './Header.scss'
import { HomeHeaderAuth } from './Header.container'

interface HeaderProps {
  classes: {
    container: string
  }
  authStatus: HomeHeaderAuth
}

const HomeHeader: React.FC<HeaderProps> = ({ classes, authStatus }) => {
  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.headerContainer, classes.container)}>
        <Link className={styles.link} to={Path.HOME}>
          FPN
        </Link>
        {/* <ul className={styles.nav}>
          <li>
            <Link to={Path.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={Path.PRICING}>Pricing</Link>
          </li>
        </ul> */}

        {
          {
            [HomeHeaderAuth.LOADING]: null,
            [HomeHeaderAuth.AUTHENTICATED]: (
              <Link className={styles.link} to={Path.USER}>
                Go to profile
              </Link>
            ),
            [HomeHeaderAuth.UNAUTHENTICATED]: (
              <div className={styles.signInActions}>
                <Link className={styles.link} to={Path.LOGIN}>
                  Login
                </Link>
                <ButtonLink className={styles.signUp} to={Path.SIGN_UP}>
                  Sign Up
                </ButtonLink>
              </div>
            ),
          }[authStatus]
        }
      </div>
    </header>
  )
}

export default HomeHeader
