import { ApolloError } from '@apollo/client'
import { NextObserver, Subject, Subscription } from 'rxjs'

import { ErrorType } from './ErrorType'

interface AppError {
  type: ErrorType
  hint?: string
  source?: Error | ApolloError
}

class ErrorHandler {
  private reporter$ = new Subject<AppError>()

  public handleError = (error: AppError): void => {
    this.reporter$.next(error)
  }

  public subscribe = (listener: NextObserver<AppError>): Subscription =>
    this.reporter$.subscribe(listener)
}

/**
 * errorHandler is a singleton
 */
const errorHandler = new ErrorHandler()

export { ErrorHandler, errorHandler, AppError }
