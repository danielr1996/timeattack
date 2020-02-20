import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TimeModule} from "../../features/time/time.module";
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../../../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    TimeModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de-DE'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
