import { Subscription } from 'rxjs'

import { Context } from '../../Context'

const subscribeContextErrors = (context: Context): Subscription =>
  context.error.error$.subscribe(errorEvent => {
    if (errorEvent) {
      context.error.errorHandler.handleError(errorEvent)
    }
  })

export { subscribeContextErrors }
