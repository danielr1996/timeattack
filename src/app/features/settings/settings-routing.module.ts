import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './components/settings/settings.component';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SettingsComponent}
  ])],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
