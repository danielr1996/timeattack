import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MigrationComponent} from "src/app/global/app/components/migration/migration.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'time', loadChildren: () => import('src/app/features/time/time.module').then(m => m.TimeModule)},
      {path: 'user', loadChildren: () => import('src/app/features/user/user.module').then(m => m.UserModule)},
      {path: 'migration', component: MigrationComponent},
      {path: '', pathMatch: 'full', redirectTo: 'time'},
      {path: '**', pathMatch: 'full', redirectTo: 'time'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
