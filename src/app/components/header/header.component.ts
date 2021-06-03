import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isThemeToggleChecked = false;

  constructor() {}

  changeThemeToDark = (): void => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
    this.isThemeToggleChecked = true;
  };

  changeThemeToLight = (): void => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
    this.isThemeToggleChecked = false;
  };

  toggleTheme(): void {
    console.log('change');
    const currentTheme = localStorage.getItem('data-theme');
    if (currentTheme === 'dark') this.changeThemeToLight();
    else this.changeThemeToDark();
  }

  setInitialTheme(): void {
    const currentTheme = localStorage.getItem('data-theme');
    if (currentTheme)
      document.documentElement.setAttribute('data-theme', currentTheme);
    else document.documentElement.setAttribute('data-theme', 'light');
    this.isThemeToggleChecked = currentTheme === 'dark';
  }

  ngOnInit(): void {
    this.setInitialTheme();
  }
}
