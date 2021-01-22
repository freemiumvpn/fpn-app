import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

interface AuthEvent {
  token: string
}

interface AuthContext {
  auth$: BehaviorSubject<AuthEvent>
}

const createAuthContext = (): AuthContext => {
  return {
    auth$: new BehaviorSubject<AuthEvent>({ token: '' }),
  }
}

export default createAuthContext
