import { Subscription } from 'rxjs'

import { Context } from './Context'
import subscribeLocalStorageToAuth from './auth/subscriptions/subscribeLocalStorageToAuth'
import subscribeToLocalStorage from './localStorage/subscriptions/subscribeToLocalStorage'
import { subscribeContextErrors } from './error/subscriptions/subscribeContextErrors'
import subscribeToAnalytics from './analytics/subscriptions/subscribeToAnalytics'

const createSubscriptions = (context: Context): Subscription[] => {
  return [
    subscribeLocalStorageToAuth(context),
    subscribeToLocalStorage(context),
    subscribeContextErrors(context),
    subscribeToAnalytics(context),
  ]
}

export default createSubscriptions
