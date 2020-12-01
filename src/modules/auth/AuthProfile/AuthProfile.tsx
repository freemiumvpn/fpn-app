import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import AuthLogout from '../AuthLogout'

const AuthProfile: React.FC = () => {
  const { user } = useAuth0()

  return (
    <div>
      <AuthLogout />
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default AuthProfile
