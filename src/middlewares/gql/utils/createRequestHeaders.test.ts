import { createRequestHeaders } from './createRequestHeaders'

describe('createRequestHeaders', () => {
  it('should populate token', () => {
    const value = createRequestHeaders('foo')
    const expected = 'Bearer foo'

    expect(value.authorization).toEqual(expected)
  })

  it('should populate correlation id', () => {
    const value = createRequestHeaders('foo')

    expect(value['x-correlation-id']).toBeTruthy()
  })
})
