import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "firebase";
import {from, Observable, ReplaySubject, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {Maybe, mayBeOfNullable} from "src/app/util/Maybe";
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firebase: AngularFireAuth) {
  }

  register(value): Observable<UserCredential> {
    return from(this.firebase.auth.createUserWithEmailAndPassword(value.email, value.password));

  }

  login(value): Observable<UserCredential> {
    return from(this.firebase.auth.signInWithEmailAndPassword(value.email, value.password));

  }

  logout(): Observable<void> {
    return from(this.firebase.auth.signOut())
  }

  getUser(): Observable<Maybe<User>> {
    return this.firebase.user.pipe(map(mayBeOfNullable))
  }

  isLoggedIn(): Observable<boolean> {
    return this.getUser().pipe(
      map(user => user.hasValue)
    );
  }
}
