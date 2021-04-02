import React from 'react'

import { AppContext } from '../../context/Context'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'

import { MarketingBasePage } from './Marketing.base'

const MarketingPage: React.FC = () => {
  const {
    analytics: { analytics$ },
  } = React.useContext(AppContext)

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.MARKETING_IOS_BETA,
    })
  }, [analytics$])

  return <MarketingBasePage />
}

export { MarketingPage }
