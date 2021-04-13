/* eslint-disable @typescript-eslint/no-explicit-any */

import { Subject } from 'rxjs/internal/Subject'

import sentry from './sentry'

enum LogLevel {
  INFO = 'INFO',
  TRACE = 'TRACE',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

interface Log {
  type: LogLevel
  message?: string
  context?: sentry.Scope
  breadcrumb?: sentry.Breadcrumb
  event?: sentry.Event
  exception?: any
}

class Logger {
  public enable = false
  private logger$ = new Subject<Log>()

  constructor(private handler = console, private reporter = sentry) {}

  public info = (message: string, context?: sentry.Scope): void => {
    this.logger$.next({
      type: LogLevel.INFO,
      message,
      context,
    })

    this.reporter.captureMessage(message, context)
    if (this.enable) this.handler.log('INFO | ', message, context)
  }

  public trace = (breadcrumb: sentry.Breadcrumb): void => {
    this.logger$.next({
      type: LogLevel.TRACE,
      breadcrumb,
    })

    if (this.enable) this.handler.debug('TRACE | ', breadcrumb)
  }

  public warn = (event: sentry.Event): void => {
    this.logger$.next({
      type: LogLevel.WARN,
      event,
    })
    this.reporter.captureEvent(event)

    if (this.enable) this.handler.warn('WARN | ', event)
  }

  public error = (exception: any, context?: sentry.Scope): void => {
    this.logger$.next({
      type: LogLevel.ERROR,
      exception,
      context,
    })
    this.reporter.captureException(exception, context)

    if (this.enable) this.handler.error('ERROR | ', exception, context)
  }
}

/**
 * logger is a singleton
 */
const logger = new Logger()
logger.enable = process.env.NODE_ENV !== 'production'

if (typeof window !== 'undefined') {
  ;(window as any)._logger = logger
}

export { logger, Logger }
