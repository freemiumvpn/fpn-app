import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const AuthLogout: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <button onClick={(): void => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

export default AuthLogout
