import { constant } from '../../../src/data/function'

describe('constant', () => {
  it('returns a function that always returns the given value', () => {
    const fnNull = constant(null)
    const fnNum  = constant(123)

    expect(fnNull()).toBe(null)
    expect(fnNum()).toBe(123)
  })
})
