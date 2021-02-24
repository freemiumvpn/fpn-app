import { Subject } from 'rxjs/internal/Subject'

import {
  Analytics,
  analytics,
  AnalyticsEvent,
} from '../../middlewares/analytics/Analytics'

interface AnalyticsContext {
  analytics: Analytics
  analytics$: Subject<AnalyticsEvent>
}

const createAnalyticsContext = (): AnalyticsContext => {
  return {
    analytics,
    analytics$: new Subject<AnalyticsEvent>(),
  }
}

export { createAnalyticsContext, AnalyticsContext }
