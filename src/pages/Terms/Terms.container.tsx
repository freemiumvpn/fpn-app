import React from 'react'

import { AppContext } from '../../context/Context'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { Path } from '../../routes/routes'

import { TermsBase } from './Terms.base'

const TermsPage: React.FC = () => {
  const {
    analytics: { analytics$ },
  } = React.useContext(AppContext)

  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.TERMS_AND_CONDITIONS,
    })
  }, [analytics$])

  return <TermsBase />
}

export { TermsPage }
