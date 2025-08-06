import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router  } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component'; 
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showNavbar = true;

 constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects; // More reliable
      const excludedRoutes = ['/landing'];
      this.showNavbar = !excludedRoutes.some(route => url.startsWith(route));
      // console.log('NAVIGATION URL:', event.urlAfterRedirects);

    });
  }
}