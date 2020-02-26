import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthenticationService} from "./features/user/services/authentication.service";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {TimeRangeQuery} from "./features/time/store/time-range.query";
import {combineLatest, Observable, of} from "rxjs";
import {TimeRangeStore} from "./features/time/store/time-range.store";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private user$ = this.authService.getUser();
  private timeRanges$ = this.timeRangeQuery.selectAll();

  constructor(
    private fb: AngularFirestore,
    private authService: AuthenticationService,
    private timeRangeQuery: TimeRangeQuery,
    private timeRangeStore: TimeRangeStore,
  ) {
  }

  save(): Observable<any> {

    return combineLatest(this.user$, this.timeRanges$).pipe(
      tap(([user, timeRanges]) => {
        this.fb.collection('timeranges').doc(user.uid).set({timeRanges: timeRanges})
          .then(function (docRef) {
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      }))
  }

  load(): Observable<any> {
    return this.user$.pipe(
      mergeMap(user => {
        return this.fb.collection('timeranges').doc(user.uid).get();
      }),
      map(doc => doc.data()),
      pluck('timeRanges'),
      tap(timeRanges => timeRanges.forEach(timeRange => this.timeRangeStore.add(timeRange))),
    )
  }
}
