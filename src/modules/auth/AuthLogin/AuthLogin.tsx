import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useLocation } from 'react-router-dom'

import { Path } from '../../../routes/routes'
import Button from '../../input/Button/Button'

import styles from './AuthLogin.scss'

interface AuthLoginProps {
  className?: string
}

const AuthLogin: React.FC<AuthLoginProps> = ({ className }) => {
  const { loginWithRedirect } = useAuth0()
  const location = useLocation()
  const text = location.pathname === Path.SIGN_UP ? 'Sign Up' : 'Login'

  return (
    <Button className={className} onClick={loginWithRedirect}>
      <span className={styles.buttonContent}>{text}</span>
      <span className={styles.buttonContent}>🔑</span>
    </Button>
  )
}

export default AuthLogin
