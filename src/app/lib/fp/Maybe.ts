export type Maybe<T> = Just<T> | Nothing

export class Just<T> {
  private constructor(public value: T) {
  }

  hasValue: true = true;

  static of<T>(value: T): Just<T> {
    return new Just(value)
  }
}

export class Nothing {
 hasValue: false = false;
}

export function mayBeOfNullable<T>(value: T): Maybe<T> {
  if (value === undefined || value === null) {
    return new Nothing();
  } else {
    return Just.of(value);
  }
}
