import 'hammerjs';
import {enableProdMode, LOCALE_ID} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/global/app/app.module';
import {environment} from './environments/environment';
import {enableAkitaProdMode, persistState} from "@datorama/akita";
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

persistState();

registerLocaleData(localeDe);

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
