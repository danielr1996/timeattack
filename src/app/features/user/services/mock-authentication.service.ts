import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "firebase";
import {from, Observable, of, ReplaySubject, Subject} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {Maybe, mayBeOfNullable} from "src/app/lib/fp/Maybe";
import UserCredential = firebase.auth.UserCredential;
import {unpackMaybe} from 'src/app/lib/fp/rxjs/unpackMaybe';


export class MockAuthenticationService {
  constructor() {
  }

  register(value): Observable<UserCredential> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );

  }

  login(value): Observable<UserCredential> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }

  logout(): Observable<void> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }

  getUser(): Observable<Maybe<User>> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }

  isLoggedIn(): Observable<boolean> {
    return of(null).pipe(
      map(mayBeOfNullable),
      unpackMaybe(),
    );
  }
}
