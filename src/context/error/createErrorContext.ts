import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

import {
  AppError,
  errorHandler,
  ErrorHandler,
} from '../../middlewares/error/ErrorHandler'

interface ErrorContext {
  errorHandler: ErrorHandler
  error$: BehaviorSubject<AppError | null>
}

const createAuthContext = (): ErrorContext => {
  return {
    errorHandler,
    error$: new BehaviorSubject<AppError | null>(null),
  }
}

export { ErrorContext, createAuthContext as default }
