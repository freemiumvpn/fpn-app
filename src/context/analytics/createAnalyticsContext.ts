import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

import {
  Analytics,
  analytics,
  AnalyticsEvent,
} from '../../middlewares/analytics/Analytics'

interface AnalyticsContext {
  analytics: Analytics
  analytics$: BehaviorSubject<AnalyticsEvent>
}

const createAnalyticsContext = (): AnalyticsContext => {
  return {
    analytics,
    analytics$: new BehaviorSubject<AnalyticsEvent>({ event: '', data: '' }),
  }
}

export { createAnalyticsContext, AnalyticsContext }
