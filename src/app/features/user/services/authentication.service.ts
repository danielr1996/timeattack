import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {User} from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user$: Subject<User> = new ReplaySubject<User>();

  constructor(private firebase: AngularFireAuth) {
    this.firebase.auth.onAuthStateChanged(user=>this.user$.next(user))
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      this.firebase.auth.setPersistence('local')
        .then(()=>this.firebase.auth.createUserWithEmailAndPassword(value.email, value.password))
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  login(value) {
    return new Promise<any>((resolve, reject) => {
      this.firebase.auth.setPersistence('local')
        .then(()=>this.firebase.auth.signInWithEmailAndPassword(value.email, value.password))
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  getUser(): Observable<User>{
    return this.user$;
  }
}
