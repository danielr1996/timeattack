import {Injectable} from '@angular/core';
import {TimeEntryQuery} from '../store/time-entry/time-entry.query';
import {TimeEntryStore} from '../store/time-entry/time-entry.store';
import {TimeEntry} from '../store/time-entry/time-entry';
import {from, Observable, of} from 'rxjs';
import {map, mergeMap, pluck, tap} from 'rxjs/operators';
import {User} from 'firebase';
import {unpackMaybe} from 'src/app/lib/fp/rxjs/unpackMaybe';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthenticationService} from 'src/app/features/user/services/authentication.service';
import {mayBeOfNullable} from 'src/app/lib/fp/Maybe';
import {TimeEntryService} from 'src/app/features/time/services/time-entry.service';

@Injectable({
  providedIn: 'root'
})
export class MockTimeEntryService{

  add(timeEntry: TimeEntry): Observable<any> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }

  get(): Observable<TimeEntry[]> {
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

  delete(id: string): Observable<any> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }
}
