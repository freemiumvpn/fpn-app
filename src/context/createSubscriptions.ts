import { Subscription } from 'rxjs'

import { Context } from './Context'
import subscribeLocalStorageToAuth from './auth/subscriptions/subscribeLocalStorageToAuth'
import subscribeToLocalStorage from './localStorage/subscriptions/subscribeToLocalStorage'
import { subscribeContextErrors } from './error/subscriptions/subscribeContextErrors'

const createSubscriptions = (context: Context): Subscription[] => {
  return [
    subscribeLocalStorageToAuth(context),
    subscribeToLocalStorage(context),
    subscribeContextErrors(context),
  ]
}

export default createSubscriptions
