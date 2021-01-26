import { Subscription } from 'rxjs/internal/Subscription'

import { Context } from '../../Context'
import { createLocalStorageStream } from '../streams/createLocalStorageStream'

const subscribeToLocalStorage = (context: Context): Subscription =>
  createLocalStorageStream(context.localStorage.localStorage$).subscribe(
    storageEvent => {
      context.localStorage.localStorage.setObject(storageEvent)
    }
  )

export default subscribeToLocalStorage
