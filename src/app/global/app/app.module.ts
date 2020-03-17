import {MatCardModule} from "@angular/material/card";
import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {UserModule} from "src/app/features/user/user.module";

import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TimeModule} from "../../features/time/time.module";
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../../../environments/environment';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {ServiceWorkerModule} from '@angular/service-worker';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {OverlayModule} from "@angular/cdk/overlay";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ThemeSwitcherComponent } from 'src/app/global/app/components/theme-switcher/theme-switcher.component';
import { MigrationComponent } from './components/migration/migration.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ThemeSwitcherComponent,
    MigrationComponent
  ],
  imports: [
    MatTooltipModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    MatCardModule,
    UserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TimeModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
