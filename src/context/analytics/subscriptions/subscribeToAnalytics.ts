import { Subscription } from 'rxjs/internal/Subscription'

import { Context } from '../../Context'

const subscribeToAnalytics = (context: Context): Subscription =>
  context.analytics.analytics$.subscribe(event => {
    if (!event.event || !event.event) return
    context.analytics.analytics.push(event)
  })

export default subscribeToAnalytics
