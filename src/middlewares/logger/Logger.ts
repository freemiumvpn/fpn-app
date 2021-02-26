/* eslint-disable no-console */

import { Subject } from 'rxjs/internal/Subject'

enum LogLevel {
  INFO = 'INFO',
  TRACE = 'TRACE',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

interface Log {
  type: LogLevel
  message: unknown[]
}

class Logger {
  public enable = false
  private logger$ = new Subject<Log>()

  public info = (...args: unknown[]): void => {
    this.logger$.next({
      type: LogLevel.INFO,
      message: args,
    })

    if (this.enable) console.log(...args)
  }

  public trace = (...args: unknown[]): void => {
    this.logger$.next({
      type: LogLevel.TRACE,
      message: args,
    })

    if (this.enable) console.log(...args)
  }

  public warn = (...args: unknown[]): void => {
    this.logger$.next({
      type: LogLevel.WARN,
      message: args,
    })

    if (this.enable) console.log(...args)
  }

  public error = (...args: unknown[]): void => {
    this.logger$.next({
      type: LogLevel.ERROR,
      message: args,
    })

    if (this.enable) console.log(...args)
  }
}

/**
 * logger is a singleton
 */
const logger = new Logger()
logger.enable = process.env.NODE_ENV !== 'production'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any)._logger = logger
}

export { logger, Logger }
