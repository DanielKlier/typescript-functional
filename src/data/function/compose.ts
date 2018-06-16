function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  return function(a: A) {
    return f(g(a))
  }
}

export { compose }
