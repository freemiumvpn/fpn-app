import { Observable } from 'rxjs/internal/Observable'
import { scan } from 'rxjs/operators'

import { LocalStorageObject } from '../../../middlewares/localStorage/localStorage'

/**
 * Reduces values to include prev and next
 */
const createLocalStorageStream = (
  localStorage$: Observable<LocalStorageObject>
): Observable<LocalStorageObject> => {
  return localStorage$.pipe(
    scan((prev, next) => {
      return {
        ...prev,
        ...next,
      }
    }, {} as LocalStorageObject)
  )
}

export { createLocalStorageStream }
