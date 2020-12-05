import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import { Path } from '../../../../routes/routes'
import ButtonLink from '../../../../modules/input/ButtonLink/ButtonLink'

import styles from './Header.scss'

interface HeaderProps {
  classes: {
    container: string
  }
}

const HomeHeader: React.FC<HeaderProps> = props => {
  return (
    <header className={classnames(styles.header)}>
      <div
        className={classnames(styles.headerContainer, props.classes.container)}
      >
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
  )
}

export default HomeHeader
