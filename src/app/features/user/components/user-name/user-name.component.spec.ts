import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameComponent } from './user-name.component';
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";
import {of} from "rxjs";

describe('UserNameComponent', () => {
  let component: UserNameComponent;
  let fixture: ComponentFixture<UserNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameComponent ],
      providers: [{provide: AngularFireAuth, useValue: {}},
        {
          provide: AuthenticationService, useValue: {
            getUser() {
              return of('hanspeter@email.de');
            }
          }
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
