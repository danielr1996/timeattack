import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../../../github.service";
import {StorageService} from "../../../../storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private storage: StorageService) {
  }

  ngOnInit(): void {
    this.storage.load().subscribe()
  }
}
