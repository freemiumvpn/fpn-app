import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

interface AuthLoginProps {
  className: string
}

const AuthLogin: React.FC<AuthLoginProps> = ({ className }) => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button className={className} onClick={loginWithRedirect}>
      Log In
    </button>
  )
}

export default AuthLogin
