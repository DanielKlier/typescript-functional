declare type None = Maybe<any>;

class Maybe<A> {
  private readonly a: A

  constructor(a: A) {
    this.a = a
  }

  public fmap<B>(m: (a: A) => B): Maybe<B> {
    return this.isJust ? Just(m(this.a)) : None
  }

  public get isJust() {
    return this.a !== null
  }
}

const None = new Maybe<any>(null)

function Just<Type>(value: Type) {
  if (value !== null) {
    return new Maybe(value)
  }
  else {
    throw TypeError('Null cannot be passed to just')
  }
}

export { None, None as Nothing, Just, Just as Some, Maybe }
