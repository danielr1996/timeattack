import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";
import {Overlay, OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
}
