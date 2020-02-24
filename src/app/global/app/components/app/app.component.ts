import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../../../github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    // this.githubService.load().subscribe();
  }
}
