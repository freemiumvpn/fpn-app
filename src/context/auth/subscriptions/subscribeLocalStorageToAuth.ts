import { Subscription } from 'rxjs/internal/Subscription'

import { Context } from '../../Context'
import {
  LocalStorageKey,
  LocalStorageObject,
} from '../../../middlewares/localStorage/localStorage'

const subscribeLocalStorageToAuth = (context: Context): Subscription =>
  context.auth.auth$.subscribe(authEvent => {
    const storage: LocalStorageObject = {
      [LocalStorageKey.ACCESS_TOKEN]: authEvent.token,
    }

    context.localStorage.localStorage$.next(storage)
  })

export default subscribeLocalStorageToAuth
