import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedSection: string | undefined;
  sectionSelected: any;
  constructor(private router: Router) {}

  select(section: string) {
    this.selectedSection = section; 
    this.sectionSelected.emit(section);
  }
  
  navigate(path: string) {
    this.router.navigate([path]);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

}
