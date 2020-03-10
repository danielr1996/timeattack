import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TimeComponent} from "./components/time/time.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: TimeComponent}
  ])],
  exports: [RouterModule]
})
export class TimeRoutingModule {
}
