import React from 'react'

import { AppContext } from '../../context/Context'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'

import { PolicyBase } from './Policy.base'

const PolicyPage: React.FC = () => {
  const {
    analytics: { analytics$ },
  } = React.useContext(AppContext)

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.PRIVACY_POLICY,
    })
  }, [analytics$])

  return <PolicyBase />
}

export { PolicyPage }
