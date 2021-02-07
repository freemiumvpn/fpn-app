import { NextObserver } from 'rxjs'

import { AppError, ErrorHandler } from './ErrorHandler'
import { ErrorType } from './ErrorType'

describe('ErrorHandler', () => {
  it('should process error', done => {
    const errorHandler = new ErrorHandler()

    const error = new Error('Custom error')

    const appError: AppError = {
      type: ErrorType.GQL_SUBSCRIPTION_PING,
      hint: 'foo',
      source: error,
    }

    const subscriber: NextObserver<AppError> = {
      next: (appErrorEvent: AppError): void => {
        expect(appErrorEvent).toEqual(appError)
        done()
      },
    }

    errorHandler.subscribe(subscriber)
    errorHandler.handleError(appError)
  })
})
