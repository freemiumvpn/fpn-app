import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import styles from './AuthLogout.scss'

const AuthLogout: React.FC = () => {
  const { logout } = useAuth0()
  const handleClick = (): void => logout({ returnTo: window.location.origin })

  return (
    <a className={styles.anchor} onClick={handleClick}>
      Log Out
    </a>
  )
}

export default AuthLogout
