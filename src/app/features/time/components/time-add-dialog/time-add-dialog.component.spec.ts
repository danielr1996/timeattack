import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAddDialogComponent } from './time-add-dialog.component';

describe('TimeAddDialogComponent', () => {
  let component: TimeAddDialogComponent;
  let fixture: ComponentFixture<TimeAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
