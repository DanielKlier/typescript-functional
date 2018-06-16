import { compose } from '../../../src/data/function/compose'

describe('compose', () => {
  it('implements the composition of two functions', () => {
    const f      = (a: number) => a + 1
    const g      = (a: number) => a * 2
    const fCompG = compose(f, g)

    expect(fCompG(3)).toBe(f(g(3)))
  })
})
