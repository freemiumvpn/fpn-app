import React from 'react'

import { AppContext } from '../../context/Context'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'

import { SupportBasePage } from './Support.base'

const SupportPage: React.FC = () => {
  const {
    analytics: { analytics$ },
  } = React.useContext(AppContext)

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.SUPPORT,
    })
  }, [analytics$])

  return <SupportBasePage />
}

export { SupportPage }
