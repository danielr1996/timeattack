import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaldatePipe } from './pipes/localdate.pipe';



@NgModule({
    declarations: [LocaldatePipe],
    exports: [
        LocaldatePipe
    ],
    imports: [
        CommonModule
    ]
})
export class TimeFnsModule { }
