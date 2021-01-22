import React from 'react'
import { BehaviorSubject } from 'rxjs'

interface AuthEvent {
  token: string
}

const context = {
  auth$: new BehaviorSubject<AuthEvent>({ token: '' }),
}

const Context = React.createContext(context)

const ContextProvider: React.FC = () => {
  return <Context.Provider value={context} />
}

export { Context as default, ContextProvider }
