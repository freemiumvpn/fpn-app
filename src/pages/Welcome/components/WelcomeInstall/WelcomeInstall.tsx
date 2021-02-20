import React from 'react'
import Link from '@material-ui/core/Link'

import { AppStore } from '../../../../modules/icon/AppStore/AppStore'
import { GoogleStore } from '../../../../modules/icon/GoogleStore/GoogleStore'
import { TunnelBlick } from '../../../../modules/icon/TunnelBlick/TunnelBlick'
import {
  getOperatingSystem,
  OperatingSystem,
} from '../../../../shared/utils/userAgent'
import { Openvpn } from '../../../../modules/icon/Openvpn/Openvpn'
import { logger } from '../../../../middlewares/logger/Logger'

import styles from './WelcomeInstall.scss'

const WelcomeInstall: React.FC = () => {
  const operatingSystem = getOperatingSystem(window.navigator.userAgent)

  const icon = {
    [OperatingSystem.UNKNOWN]: null,
    [OperatingSystem.ANDROID]: <GoogleStore />,
    [OperatingSystem.IOS]: <AppStore />,
    [OperatingSystem.OSX]: <TunnelBlick />,
    [OperatingSystem.WINDOWS]: <Openvpn />,
  }[operatingSystem]

  const url = {
    [OperatingSystem.UNKNOWN]: '#',
    [OperatingSystem.ANDROID]:
      'https://play.google.com/store/apps/details?id=net.openvpn.openvpn',
    [OperatingSystem.IOS]:
      'https://apps.apple.com/gb/app/openvpn-connect/id590379981',
    [OperatingSystem.OSX]: 'https://tunnelblick.net/',
    [OperatingSystem.WINDOWS]:
      'https://openvpn.net/client-connect-vpn-for-windows/',
  }[operatingSystem]

  const handleClick = (): void => {
    logger.trace('operatingSystem', operatingSystem)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Install a VPN client</h1>
      </header>
      <div className={styles.content}>
        <p className={styles.legend}>
          Clients will be built based on popular demand.
        </p>
        {icon && (
          <>
            <p className={styles.legend}>
              This link will redirect you to an{' '}
              <Link
                href={url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
              >
                Open Source
              </Link>{' '}
              client.
            </p>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              {icon}
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export { WelcomeInstall }
