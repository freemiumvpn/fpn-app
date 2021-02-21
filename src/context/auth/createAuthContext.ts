import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

interface AuthEvent {
  token: string
}

interface AuthContext {
  auth$: BehaviorSubject<AuthEvent>
}

const TOKEN_INIT = '@@_TOKEN_NOT_SET_@@'

const createAuthContext = (): AuthContext => {
  return {
    auth$: new BehaviorSubject<AuthEvent>({ token: TOKEN_INIT }),
  }
}

export { AuthEvent, AuthContext, createAuthContext as default, TOKEN_INIT }
