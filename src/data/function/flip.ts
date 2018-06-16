export function flip<A, B, C>(f: (a: A, b: B, ...rest: any[]) => C): (b: B, a: A, ...rest: any[]) => C {
  return function(this: any, b: B, a: A, ...rest: any[]) {
    return f.apply(this, [a, b, ...rest])
  }
}
