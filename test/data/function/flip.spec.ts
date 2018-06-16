import { flip } from '../../../src/data/function/flip'

describe('flip', () => {
  it('flips returns a function that takes the first two arguments of f in reverse order', () => {
    const f = (a: any, b: any) => [a, b]
    expect(flip(f)(1, 2)).toEqual([2, 1])
  })

  it('preserves the rest of the arguments', () => {
    const f       = (a: any, b: any, ...rest: any[]) => [a, b, ...rest]
    const flipped = flip(f)
    expect(flipped(1, 2, 3, 4)).toEqual([2, 1, 3, 4])
  })
})
