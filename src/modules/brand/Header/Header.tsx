import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import { Path } from '../../../routes/routes'
import AuthLogout from '../../auth/AuthLogout'
import Logo from '../Logo/Logo'

import styles from './Header.scss'

const Header: React.FC = () => {
  return (
    <header className={classnames(styles.header)}>
      <div className={styles.headerContainer}>
        <Link className={styles.link} to={Path.HOME}>
          <Logo className={styles.logo} />
        </Link>
        <div className={styles.signInActions}>
          <AuthLogout />
        </div>
      </div>
    </header>
  )
}

export default Header
