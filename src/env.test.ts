import { parseEnv } from './env'

describe('Env', () => {
  it('parseEnv should not throw', () => {
    expect(() => parseEnv()).not.toThrow()
  })

  it('should handle injected envs', () => {
    const injected = JSON.stringify({ AUTH0_DOMAIN: 'baz' })
    const env = btoa(injected)

    const value = parseEnv(env).AUTH0_DOMAIN
    const expected = 'baz'

    expect(value).toEqual(expected)
  })
})
