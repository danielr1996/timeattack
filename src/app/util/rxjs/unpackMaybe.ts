import {filter, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Maybe} from "../Maybe";

/**
 * takes an Observable<Maybe<T>> and emits an Observable<T> if the Maybe has a value and doesn't emit anything if the Maybe is Nothing
 */
export const unpackMaybe = () => <T>(source: Observable<Maybe<T>>): Observable<T> => source.pipe(
  filter((maybe) => maybe.hasValue),
  map(maybe => {
    if (maybe.hasValue) {
      return maybe.value
    }
  })
);
