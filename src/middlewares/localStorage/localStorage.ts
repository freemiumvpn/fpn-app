import { errorHandler, ErrorHandler } from '../error/ErrorHandler'
import { ErrorType } from '../error/ErrorType'

enum LocalStorageKey {
  NONE = 'NONE',
  ACCESS_TOKEN = 'ACCESS_TOKEN',
}

type LocalStorageObject = {
  [K in LocalStorageKey]?: string
}

/**
 * Methods are idempotent,
 * think PUT instead of POST
 */
interface LocalStorage {
  set: (key: LocalStorageKey, value: string) => void
  setObject: (obj: LocalStorageObject) => void
  get: (key: LocalStorageKey) => string | null
}

const LOCAL_STORAGE_ID = '@@FPN@@'

const createLocalStorage = (errorHandler: ErrorHandler): LocalStorage => {
  return {
    set: (key: LocalStorageKey, value: string): void => {
      try {
        const item = btoa(JSON.stringify({ [key]: value }))
        localStorage.setItem(LOCAL_STORAGE_ID, item)
      } catch (error) {
        errorHandler.handleError({
          type: ErrorType.LOCAL_STORAGE_UNABLE_TO_WRITE,
          hint: `key: ${key}, value: ${value}`,
          source: error,
        })
      }
    },
    setObject: (obj: LocalStorageObject): void => {
      try {
        const item = btoa(JSON.stringify(obj))
        localStorage.setItem(LOCAL_STORAGE_ID, item)
      } catch (error) {
        errorHandler.handleError({
          type: ErrorType.LOCAL_STORAGE_UNABLE_TO_WRITE,
          hint: `Attempted to write an object to local storage`,
          source: error,
        })
      }
    },
    get: (key: LocalStorageKey): string | null => {
      const storageBase64 = localStorage.getItem(LOCAL_STORAGE_ID)
      if (!storageBase64) {
        errorHandler.handleError({
          type: ErrorType.LOCAL_STORAGE_UNABLE_TO_GET_STORAGE,
        })

        return null
      }

      try {
        const storage = JSON.parse(atob(storageBase64))
        if (storage[key]) {
          return storage[key]
        }

        errorHandler.handleError({
          type: ErrorType.LOCAL_STORAGE_UNABLE_TO_FIND_KEY,
          hint: `${key} not found`,
        })

        return null
      } catch (error) {
        errorHandler.handleError({
          type: ErrorType.LOCAL_STORAGE_UNABLE_TO_READ,
          source: error,
        })

        return null
      }
    },
  }
}

/**
 * LocalStorage is a singleton
 */
const localStorageContext = createLocalStorage(errorHandler)

export {
  localStorageContext,
  LOCAL_STORAGE_ID,
  createLocalStorage,
  LocalStorage,
  LocalStorageKey,
  LocalStorageObject,
}
