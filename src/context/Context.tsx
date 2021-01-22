import React from 'react'

import createAuthContext from './auth/createAuthContext'
import createErrorContext from './error/createErrorContext'
import createGqlContext from './gql/createGqlContext'

const context = {
  auth: createAuthContext(),
  gql: createGqlContext(),
  error: createErrorContext(),
}

const Context = React.createContext(context)

const ContextProvider: React.FC = props => {
  return <Context.Provider value={context}>{props.children}</Context.Provider>
}

export { Context as default, ContextProvider }
