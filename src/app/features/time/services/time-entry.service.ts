import {Injectable} from '@angular/core';
import {TimeEntryQuery} from "../store/time-entry/time-entry.query";
import {TimeEntryStore} from "../store/time-entry/time-entry.store";
import {TimeEntry} from "../store/time-entry/time-entry";
import {from, Observable, of} from "rxjs";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {User} from "firebase";
import {unpackMaybe} from "src/app/lib/fp/rxjs/unpackMaybe";
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {
  private user$: Observable<User> = this.authService.getUser().pipe(unpackMaybe());

  constructor(private fb: AngularFirestore,
              private authService: AuthenticationService,
              private timeEntryQuery: TimeEntryQuery,
              private timeEntryStore: TimeEntryStore) {
  }

  add(timeEntry: TimeEntry): Observable<any> {
    this.timeEntryStore.add(timeEntry);
    return this.user$.pipe(
      mergeMap(user => from(
        this.fb.collection('users')
          .doc(user.uid)
          .collection('timeEntries')
          .doc(timeEntry.id)
          .set(timeEntry)
        )
      )
    );
  }

  get(): Observable<TimeEntry[]> {
    return this.timeEntryQuery.selectAll();
  }

  load(): Observable<any> {
    return this.user$.pipe(
      mergeMap(user =>
        this.fb.collection('users')
          .doc(user.uid)
          .collection('timeEntries')
          .get()
      ),
      pluck('docs'),
      mergeMap(from),
      map(data => data.data()),
      // tap(timeEntry=>console.log('TimeEntry: ',timeEntry)),
      tap(timeEntry => this.timeEntryStore.add(timeEntry)),
    );
  }

  delete(id: string): Observable<any> {
    this.timeEntryStore.remove(id);
    return this.user$.pipe(
      mergeMap(user => from(
        this.fb.collection('users')
          .doc(user.uid)
          .collection('timeEntries')
          .doc(id)
          .delete()
        )
      )
    );
  }
}
