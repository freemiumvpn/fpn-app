/* eslint-disable @typescript-eslint/camelcase */
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
  const isSignUp = location.pathname === Path.SIGN_UP
  const text = isSignUp ? 'Sign Up' : 'Login'

  return (
    <Button
      className={className}
      onClick={(): Promise<void> =>
        loginWithRedirect({ screen_hint: isSignUp ? 'signup' : 'login' })
      }
    >
      <span className={styles.buttonContent}>{text}</span>
      <span className={styles.buttonContent}>🔑</span>
    </Button>
  )
}

export default AuthLogin
