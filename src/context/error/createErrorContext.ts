import { ApolloError } from '@apollo/client'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

export enum ErrorType {
  GQL_QUERY_PING = 'GQL_QUERY_PING',
}

interface ErrorEvent {
  type: ErrorType
  data: typeof Error | ApolloError
}

interface ErrorContext {
  error$: BehaviorSubject<ErrorEvent | null>
}

const createAuthContext = (): ErrorContext => {
  return {
    error$: new BehaviorSubject<ErrorEvent | null>(null),
  }
}

export default createAuthContext
