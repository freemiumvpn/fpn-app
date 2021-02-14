import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { useAuth0 } from '@auth0/auth0-react'

import { useVpnCreateSessionMutation } from '../../../../generated/graphql/schema.graphql'

import styles from './DashboardContent.scss'

const downloadToFile = (
  content: string,
  filename: string,
  contentType: string
): void => {
  const file = new Blob([content], { type: contentType })

  const a = document.createElement('a')
  a.target = '_self'
  a.href = URL.createObjectURL(file)
  a.download = filename
  a.click()

  URL.revokeObjectURL(a.href)
}

const DashboardContent: React.FC = () => {
  const { user } = useAuth0()
  const userId = user.sub || 'TEST_APP'
  const [error, setError] = useState('')
  const [credentials, setCredentials] = useState('')

  const [
    connectMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useVpnCreateSessionMutation({
    variables: {
      userId: userId,
    },
  })

  const handleClick = async (): Promise<void> => {
    const { data } = await connectMutation()
    if (!data) {
      return setError('Request failed')
    }

    const { credentials } = data.vpnCreateSession
    setCredentials(atob(credentials))
  }

  const handleSave = (): void => {
    downloadToFile(credentials, 'freemiumpn.ovpn', 'text/plain')
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vpn Session</h3>
      <div className={styles.content}>
        <Button
          className={styles.button}
          onClick={handleClick}
          variant="outlined"
        >
          Request Access
        </Button>
        {mutationLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {mutationError && <div>{mutationError}</div>}
        {credentials && (
          <Button className={styles.button} onClick={handleSave}>
            Download File
          </Button>
        )}
        {credentials && <div className={styles.credentials}>{credentials}</div>}
      </div>
    </div>
  )
}

export { DashboardContent }
