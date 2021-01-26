import React, { useEffect } from 'react'

import { errorHandler } from '../middlewares/error/ErrorHandler'

import createAuthContext, { AuthContext } from './auth/createAuthContext'
import createSubscriptions from './createSubscriptions'
import createErrorContext, { ErrorContext } from './error/createErrorContext'
import createGqlContext, { GqlContext } from './gql/createGqlContext'
import createLocalStorageContext, {
  LocalStorageContext,
} from './localStorage/createLocalStorageContext'

interface Context {
  auth: AuthContext
  gql: GqlContext
  error: ErrorContext
  localStorage: LocalStorageContext
}

const context = {
  auth: createAuthContext(),
  gql: createGqlContext(),
  error: createErrorContext(),
  localStorage: createLocalStorageContext(errorHandler),
}

const ReactContext = React.createContext(context)

const ContextProvider: React.FC = props => {
  useEffect(() => {
    const subscriptions = createSubscriptions(context)

    return (): void => {
      subscriptions.forEach(s => s.unsubscribe())
    }
  }, [])

  return (
    <ReactContext.Provider value={context}>
      {props.children}
    </ReactContext.Provider>
  )
}

export { Context, ReactContext as default, ContextProvider }
