import React from 'react'
import { Subject } from 'rxjs'
import { act, renderHook } from '@testing-library/react-hooks'
import { render, fireEvent } from '@testing-library/react'

import useObservable from './useObservable'

describe('useObservable', () => {
  it('should return current value', () => {
    const initialValue = 'foo'
    const $ = new Subject()

    const { result } = renderHook(() => useObservable($, initialValue))

    const value = result.current
    const expected = 'foo'

    expect(value).toBe(expected)
  })

  it('should update current value', () => {
    const initialValue = 'foo'
    const $ = new Subject()

    const { result } = renderHook(() => useObservable($, initialValue))

    act(() => {
      $.next('baz')
    })

    const value = result.current
    const expected = 'baz'

    expect(value).toBe(expected)
  })
})

describe('useObservable in component', () => {
  it('handles observable values', () => {
    const initialValue = 'foo'
    const $ = new Subject<string>()
    const Component: React.FC = () => {
      const currentValue = useObservable($, initialValue)

      return <button>{currentValue}</button>
    }

    const { getByRole } = render(<Component />)

    const htmlElement = getByRole('button', { name: 'foo' })

    const value = htmlElement.innerHTML
    const expected = 'foo'

    expect(value).toEqual(expected)
  })

  it('handles observable updates', async () => {
    const $ = new Subject<number>()
    let count = 0

    const Component: React.FC = () => {
      const currentValue = useObservable($, 0)

      const handleClick = (): void => {
        count++
        $.next(count)
      }

      return (
        <button onClick={handleClick}>Current Value: {currentValue}</button>
      )
    }

    const { getByRole } = render(<Component />)

    const htmlElement = getByRole('button', { name: /Current Value/i })

    let value = htmlElement.innerHTML
    let expected = 'Current Value: 0'

    expect(value).toEqual(expected)

    act(() => {
      fireEvent.click(htmlElement)
      fireEvent.click(htmlElement)
      fireEvent.click(htmlElement)
    })

    const updatedElement = getByRole('button', { name: /Current Value/i })
    value = updatedElement.innerHTML
    expected = 'Current Value: 3'
    expect(value).toEqual(expected)
  })

  it('should subscribe to observable', () => {
    const $ = new Subject<number>()
    let count = 0

    const Component: React.FC = () => {
      const currentValue = useObservable($, 0)

      const handleClick = (): void => {
        count++
        $.next(count)
      }

      return (
        <button onClick={handleClick}>Current Value: {currentValue}</button>
      )
    }

    render(<Component />)

    const value = $.observers.length
    const expected = 1

    expect(value).toEqual(expected)
  })

  it('should unsubscribe from observable', () => {
    const $ = new Subject<number>()
    let count = 0

    const Component: React.FC = () => {
      const currentValue = useObservable($, 0)

      const handleClick = (): void => {
        count++
        $.next(count)
      }

      return (
        <button onClick={handleClick}>Current Value: {currentValue}</button>
      )
    }

    const { unmount } = render(<Component />)

    let value = $.observers.length
    let expected = 1

    expect(value).toEqual(expected)

    act(() => {
      unmount()
    })

    value = $.observers.length
    expected = 0

    expect(value).toEqual(expected)
  })

  it('should not subscribe to observable on re-renders', async () => {
    const $ = new Subject<number>()
    let count = 0

    const Component: React.FC = () => {
      const currentValue = useObservable($, 0)

      const handleClick = (): void => {
        count++
        $.next(count)
      }

      return (
        <button onClick={handleClick}>Current Value: {currentValue}</button>
      )
    }

    const { rerender } = render(<Component />)

    const value = $.observers.length
    const expected = 1

    expect(value).toEqual(expected)

    await rerender(<Component />)

    expect(value).toEqual(expected)
  })

  it('should persist state on re-renders', async () => {
    const $ = new Subject<number>()
    const initialValue = 0
    let count = 0

    const Component: React.FC = () => {
      const currentValue = useObservable($, initialValue)

      const handleClick = (): void => {
        count++
        $.next(count)
      }

      return (
        <button onClick={handleClick}>Current Value: {currentValue}</button>
      )
    }

    const { rerender, getByRole } = render(<Component />)

    // Initial State
    const htmlElement = getByRole('button', { name: /Current Value/i })
    let value: string | number = htmlElement.innerHTML
    let expected: string | number = 'Current Value: 0'
    expect(value).toEqual(expected)

    // User updates
    act(() => {
      fireEvent.click(htmlElement)
      fireEvent.click(htmlElement)
      fireEvent.click(htmlElement)
    })

    let updatedElement = getByRole('button', { name: /Current Value/i })
    value = updatedElement.innerHTML
    expected = 'Current Value: 3'
    expect(value).toEqual(expected)

    // Observers State
    value = $.observers.length
    expected = 1
    expect(value).toEqual(expected)

    // RE-render
    await rerender(<Component />)

    // Observers State
    expect(value).toEqual(expected)

    // Component State
    updatedElement = getByRole('button', { name: /Current Value/i })
    value = updatedElement.innerHTML
    expected = 'Current Value: 3'
    expect(value).toEqual(expected)
  })
})
