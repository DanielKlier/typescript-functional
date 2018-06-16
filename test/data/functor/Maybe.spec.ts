import { id, compose } from '../../../src/data/function'
import { Just, None, Maybe, Some, Nothing } from '../../../src/data/functor'

describe('maybe', () => {
  it('returns a Maybe when passed a value', () => {

    const m = Just(3)
    expect(m.isJust).toBeTruthy()

    const some = Some(true)
    expect(some.isJust).toBeTruthy()

    expect(None.isJust).toBeFalsy()
    expect(Nothing.isJust).toBeFalsy()
  })
})

describe('just', () => {
  it('returns a Maybe when passed a value', () => {
    expect(Just(123) instanceof Maybe).toBeTruthy()
  })

  it('throws an error when passed null', () => {
    expect(() => {
      Just(null)
    }).toThrow()
  })
})

describe('Maybe', () => {
  describe('is a functor', () => {
    let m: Maybe<number>
    beforeEach(() => {
      m = Just(123)
    })

    it('preserves identity', () => {
      expect(m.fmap(id)).toEqual(m)
      expect(None.fmap(id)).toEqual(None)
    })

    it('is associative', () => {
      const plusOne  = (a: number) => a + 1
      const timesTwo = (a: number) => a * 2

      expect(m.fmap(compose(timesTwo, plusOne))).toEqual(m.fmap(plusOne).fmap(timesTwo))
      expect(None.fmap(compose(timesTwo, plusOne))).toEqual(None.fmap(a => a + 1).fmap(timesTwo))
    })
  })

  describe('isJust', () => {
    it('returns false if the wrapped value is a Nothing', () => {
      const m = new Maybe(null)
      expect(m.isJust).toBeFalsy()
    })

    it('returns true if the wrapped value is a Just(A)', () => {
      expect(Just(true).isJust).toBeTruthy()
      expect(Just(false).isJust).toBeTruthy()
      expect(Just({}).isJust).toBeTruthy()
      expect(Just([]).isJust).toBeTruthy()
      expect(Just(123).isJust).toBeTruthy()
      expect(Just('1').isJust).toBeTruthy()
      expect(Just('false').isJust).toBeTruthy()
    })
  })

  describe('wraps values in a Just', () => {
    it('false is a Just', () => {
      const f = jest.fn()
      Just(false).fmap(f)
      expect(f).toHaveBeenCalled()
    })
  })
})
