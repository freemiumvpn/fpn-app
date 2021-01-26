import { marbles } from 'rxjs-marbles/mocha'

import {
  LocalStorageKey,
  LocalStorageObject,
} from '../../../middlewares/localStorage/localStorage'

import { createLocalStorageStream } from './createLocalStorageStream'

describe('createLocalStorageStream', () => {
  it(
    'should compose storage',
    marbles(m => {
      const inputEvent = {
        a: {
          [LocalStorageKey.ACCESS_TOKEN]: 'baz',
        } as LocalStorageObject,
        b: {
          [LocalStorageKey.ACCESS_TOKEN]: 'gizmo',
        } as LocalStorageObject,
        c: {
          [LocalStorageKey.NONE]: 'foo',
        } as LocalStorageObject,
      }

      const expectedEvent = {
        a: {
          [LocalStorageKey.ACCESS_TOKEN]: 'baz',
        } as LocalStorageObject,
        b: {
          [LocalStorageKey.ACCESS_TOKEN]: 'gizmo',
        } as LocalStorageObject,
        c: {
          [LocalStorageKey.ACCESS_TOKEN]: 'gizmo',
          [LocalStorageKey.NONE]: 'foo',
        } as LocalStorageObject,
      }

      const expected$ = m.hot('^-a-b-c', expectedEvent)
      const input$ = m.hot('---^-a-b-c', inputEvent)

      const value$ = createLocalStorageStream(input$)

      m.expect(value$).toBeObservable(expected$)
    })
  )
})
