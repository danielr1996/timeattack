import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TimeModule} from "../../features/time/time.module";
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../../../environments/environment';
import {RouterModule} from "@angular/router";
import {SettingsRoutingModule} from "../../features/settings/settings-routing.module";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'settings',
        loadChildren: () => import('../../features/settings/settings.module').then(m => m.SettingsModule)
      },
      {path: 'time', loadChildren: () => import('../../features/time/time.module').then(m => m.TimeModule)},
      {path: '', pathMatch: 'full', redirectTo: 'time'},
      {path: '**', pathMatch: 'full', redirectTo: 'time'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
