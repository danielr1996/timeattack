import {DateEntry} from '../store/date-entry/date-entry';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {unpackMaybe} from 'src/app/lib/fp/rxjs/unpackMaybe';
import {mayBeOfNullable} from 'src/app/lib/fp/Maybe';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDateEntryService{
  public add(dateEntry: DateEntry): Observable<void> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }

  load(): Observable<any> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }

  public get(): Observable<DateEntry[]> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }

  delete(id: string): Observable<any> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }
}
