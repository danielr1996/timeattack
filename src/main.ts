import {enableProdMode, LOCALE_ID} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/global/app/app.module';
import {environment} from './environments/environment';
import {enableAkitaProdMode, persistState} from "@datorama/akita";
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {Observable} from "rxjs";

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

// persistState({
//   storage: {
//     getItem<T>(key: string): Promise<T> | Observable<T> | T {
//       console.log(key);
//       return null;
//     },
//     setItem<T>(key: string, value: any): Promise<T> | Observable<T> | T {
//       console.log(key, value);
//       return null;
//     },
//     clear(): void {
//     }
//   }
// });


registerLocaleData(localeDe);

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
