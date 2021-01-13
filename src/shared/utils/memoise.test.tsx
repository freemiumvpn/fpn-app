import memoise from './memoise'

describe('memoise', () => {
  it('should create value', () => {
    const input = {
      foo: 'baz',
      baz: 'gizmo',
    }

    const stub = jest.fn().mockReturnValue(input)
    const getInput = memoise(stub)

    const value = getInput()
    const expected = input

    expect(value).toEqual(expected)
    expect(stub).toBeCalledTimes(1)
  })

  it('should create value', () => {
    const input = {
      foo: 'baz',
      baz: 'gizmo',
    }

    const stub = jest.fn().mockReturnValue(input)
    const getInput = memoise(stub)

    const value = getInput()
    const expected = input

    expect(value).toEqual(expected)

    expect(getInput()).toEqual(expected)
    expect(getInput()).toEqual(expected)
    expect(stub).toBeCalledTimes(1)
  })
})
