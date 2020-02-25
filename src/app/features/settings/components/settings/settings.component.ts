import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, of, Subject} from "rxjs";
import {map, mergeMapTo, tap} from "rxjs/operators";
import {SettingsService} from "../../services/settings.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserInfo} from "../../store/user-info";
import {mayBeOfNullable} from "../../../../util/Maybe";
import {empty} from "rxjs/internal/Observer";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public form: FormGroup;
  public save$: Subject<void> = new Subject<void>().pipe(
    map(() => this.form.value as UserInfo),
    map(settings => {
      if (this.form.valid) {
        this.settingsService.setUserInfo(settings);
        this.snackBar.open("Settings saved!", null, {duration: 2000});
      } else {
        console.error("Form not valid");
      }
    }),
  ) as Subject<void>;

  public delete$: Subject<void> = new Subject<void>().pipe(
    tap(() => this.settingsService.delete()),
    tap(() => this.snackBar.open("Settings deleted!", null, {duration: 2000})),
  ) as Subject<void>;

  public load$: Observable<any> = this.settingsService.getUserInfo()
    .pipe(
      tap(settings => {
        if (settings.hasValue) {
          this.form.setValue(settings.value)
        } else {
          this.form.setValue({username: null, token: null})
        }
      }),
    );

  constructor(private fb: FormBuilder, private settingsService: SettingsService, private snackBar: MatSnackBar) {
    this.form = fb.group({
      username: fb.control('', [Validators.required]),
      token: fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.load$.subscribe();
    this.save$.subscribe();
    this.delete$.subscribe();
  }
}
