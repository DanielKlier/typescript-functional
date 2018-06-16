import { id } from '../../../src/data/function'

describe('id', () => {
  it('just returns the argument it is called with', () => {
    expect(id(123)).toBe(123)
    expect(id('Hello')).toBe('Hello')
    const o = { a: 123 }
    expect(id(o)).toBe(o)
    const fn = (a: number) => a + 1
    expect(id(fn)).toBe(fn)
  })
})
