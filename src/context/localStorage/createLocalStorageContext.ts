import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

import { ErrorHandler } from '../../middlewares/error/ErrorHandler'
import {
  createLocalStorage,
  LocalStorage,
  LocalStorageObject,
} from '../../middlewares/localStorage/localStorage'

interface LocalStorageContext {
  localStorage: LocalStorage
  localStorage$: BehaviorSubject<LocalStorageObject>
}

const createLocalStorageContext = (
  errorHandler: ErrorHandler
): LocalStorageContext => {
  return {
    localStorage: createLocalStorage(errorHandler),
    localStorage$: new BehaviorSubject<LocalStorageObject>(
      {} as LocalStorageObject
    ),
  }
}

export { LocalStorageContext, createLocalStorageContext as default }
