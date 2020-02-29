import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  public theme = localStorage.getItem('timeattack_theme');

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    let link: any = document.querySelector('#theme');
    if (this.theme === 'dark') {
      this.theme = 'light';
      link.href = 'assets/themes/theme-light.css';
    } else {
      this.theme = 'dark';
      link.href = 'assets/themes/theme-dark.css';
    }
    localStorage.setItem('timeattack_theme', this.theme)
  }

}
