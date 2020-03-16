import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAddComponent } from './day-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DateEntryService} from 'src/app/features/time/services/date-entry.service';
import {MockDateEntryService} from 'src/app/features/time/services/mock-date-entry.service';

describe('DayAddComponent', () => {
  let component: DayAddComponent;
  let fixture: ComponentFixture<DayAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayAddComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        {provide: DateEntryService, useClass: MockDateEntryService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
