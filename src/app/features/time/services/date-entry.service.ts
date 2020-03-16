import {Injectable} from '@angular/core';
import {DateEntryStore} from "../store/date-entry/date-entry.store";
import {DateEntryQuery} from "../store/date-entry/date-entry.query";
import {DateEntry} from "../store/date-entry/date-entry";
import {from, Observable, of} from "rxjs";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {User} from "firebase";
import {unpackMaybe} from "src/app/lib/fp/rxjs/unpackMaybe";
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class DateEntryService {
  private user$: Observable<User> = this.authService.getUser().pipe(unpackMaybe());

  constructor(
    private fb: AngularFirestore,
    private authService: AuthenticationService,
    private dateEntryStore: DateEntryStore,
    private dateEntryQuery: DateEntryQuery
  ) {
  }

  public add(dateEntry: DateEntry): Observable<void> {
    this.dateEntryStore.add(dateEntry);
    return this.user$.pipe(
      mergeMap(user => from(
        this.fb.collection('users')
          .doc(user.uid)
          .collection('dateentries')
          .doc(dateEntry.id)
          .set(dateEntry))
      )
    );
  }

  load(): Observable<any> {
    return this.user$.pipe(
      mergeMap(user =>
        this.fb.collection('users')
          .doc(user.uid)
          .collection('dateentries')
          .get()
      ),
      pluck('docs'),
      mergeMap(from),
      map(data => data.data()),
      tap(dateEntry => this.dateEntryStore.add(dateEntry)),
    );
  }

  public get(): Observable<DateEntry[]> {
    return this.dateEntryQuery.selectAll();
  }

  delete(id: string): Observable<any> {
    this.dateEntryStore.remove(id);
    return of();
  }
}
