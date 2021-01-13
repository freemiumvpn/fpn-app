import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import AuthLogout from '../AuthLogout'

const AuthProfile: React.FC = () => {
  const { user } = useAuth0()

  return (
    <div>
      <AuthLogout />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.picture} alt={user.name} />
    </div>
  )
}

export default AuthProfile
