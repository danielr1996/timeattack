import { Injectable } from '@angular/core';
import {SettingsService} from "./features/settings/services/settings.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private settingsService: SettingsService) { }

  public save(): Observable<any>{
    console.log('save');
    return this.settingsService.getUserInfo().pipe(
      // tap(settings=>console.log(settings)),
    )
  }

  public load(): Observable<any>{
    console.log('load');
    return this.settingsService.getUserInfo().pipe(
      tap(settings=>console.log(settings)),
    )
  }
}
