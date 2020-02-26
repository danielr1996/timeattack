import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {User} from "firebase";
import {map, tap} from "rxjs/operators";
import {mayBeOfNullable} from "../../../util/Maybe";
import {unpackMaybe} from "../../../util/rxjs/unpackMaybe";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user$: Subject<User> = new ReplaySubject<User>().pipe(
    map(mayBeOfNullable),
    unpackMaybe(),
  ) as Subject<User>;

  constructor(private firebase: AngularFireAuth) {
    this.firebase.auth.onAuthStateChanged(user => this.user$.next(user))
  }

  // FIXME return Promise as Observable
  register(value) {
    return new Promise<any>((resolve, reject) => {
      this.firebase.auth.setPersistence('local')
        .then(() => this.firebase.auth.createUserWithEmailAndPassword(value.email, value.password))
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  // FIXME return Promise as Observable
  login(value) {
    return new Promise<any>((resolve, reject) => {
      this.firebase.auth.setPersistence('local')
        .then(() => this.firebase.auth.signInWithEmailAndPassword(value.email, value.password))
        .then(res => {
          this.user$.next(this.firebase.auth.currentUser)
          resolve(res);
        }, err => reject(err))
    })
  }

  getUser(): Observable<User> {
    return this.user$;
  }
}