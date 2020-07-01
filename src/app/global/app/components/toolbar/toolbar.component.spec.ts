import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolbarComponent} from './toolbar.component';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";
import {of} from "rxjs";

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      providers: [
        // {provide: AngularFireAuth, useValue: {}},
        {provide: Router, useValue: {}},
        {
          provide: AuthenticationService, useValue: {
            isLoggedIn() {
              return of(true);
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
