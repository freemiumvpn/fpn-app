import { ErrorHandler } from '../error/ErrorHandler'
import {
  createLocalStorage,
  LocalStorageKey,
  LOCAL_STORAGE_ID,
} from '../localStorage/localStorage'

describe('localStorage', () => {
  it('should set values to storage', () => {
    const errorHandler = new ErrorHandler()
    const storage = createLocalStorage(errorHandler)

    storage.set(LocalStorageKey.NONE, 'baz')
    expect(localStorage.getItem(LOCAL_STORAGE_ID)).toBeTruthy()
  })

  it('should get values to storage', () => {
    const errorHandler = new ErrorHandler()
    const storage = createLocalStorage(errorHandler)

    storage.set(LocalStorageKey.ACCESS_TOKEN, 'baz')
    const value = storage.get(LocalStorageKey.ACCESS_TOKEN)
    const expected = 'baz'

    expect(value).toBe(expected)
  })
})
