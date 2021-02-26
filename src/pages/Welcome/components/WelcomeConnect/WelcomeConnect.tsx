import React, { useContext } from 'react'
import { filter } from 'rxjs/operators'
import { Link } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import SettingsIcon from '@material-ui/icons/Settings'

import { AppContext } from '../../../../context/Context'
import useObservable from '../../../../shared/hooks/useObservable'
import { useVpnSignedUrl } from '../../../../modules/vpn/hooks/useVpnSignedUrl'
import { TOKEN_INIT } from '../../../../context/auth/createAuthContext'
import { AnalyticsEventType } from '../../../../middlewares/analytics/Analytics'

import styles from './WelcomeConnect.scss'

const WelcomeConnect: React.FC = () => {
  const {
    auth: { auth$ },
    analytics: { analytics$ },
  } = useContext(AppContext)
  const tokenStore = useObservable(
    auth$.pipe(
      filter(a => Boolean(a.token)),
      filter(a => a.token !== TOKEN_INIT)
    ),
    {
      token: '',
    }
  )

  const { data: url, loading, error } = useVpnSignedUrl(tokenStore.token)

  const handleClick = (): void => {
    analytics$.next({
      event: AnalyticsEventType.PAGE_WELCOME_CLICK_DOWNLOAD,
      data: url,
    })
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Connect to FPN</h1>
      </header>

      <div className={styles.content}>
        {error && (
          <>
            <p className={styles.legend}>
              An error has occurred, try refreshing this page
            </p>
          </>
        )}
        {loading && (
          <>
            <p className={styles.legend}>Creating config...</p>
            <SettingsIcon className={styles.loadingIcon} />
            <CircularProgress size={68} className={styles.loadingProgress} />
          </>
        )}
        {url && (
          <>
            <Link
              href={url}
              color="primary"
              className={styles.link}
              onClick={handleClick}
            >
              <SettingsIcon className={styles.icon} />
              <p className={styles.legend}>Click to download</p>
            </Link>
            <p className={styles.legend}>Link expires in 2 minutes </p>
          </>
        )}
      </div>
    </div>
  )
}

export { WelcomeConnect }
