import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from '../Models/menu-item';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  showFiller = false;
  showMenu = false;

  menuItems: MenuItem[];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.showFiller = true;
    this.menuItems = [
      {
        Name: 'Home',
        IsActive: true,
        Href: 'index.html',
        IconClass: 'bx bx-home'
      },
      {
        Name: 'About',
        IsActive: false,
        Href: '#about',
        IconClass: 'bx bx-user'
      },
      {
        Name: 'Wisdom',
        IsActive: false,
        Href: '#resume',
        IconClass: 'bx bx-brain'
      },
      {
        Name: 'Certificates',
        IsActive: false,
        Href: '#portfolio',
        IconClass: 'bx bx-award'
      },
      {
        Name: 'Tech Stack',
        IsActive: false,
        Href: '#services',
        IconClass: 'bx bx-layer'
      },
      {
        Name: 'Contact',
        IsActive: false,
        Href: '#contact',
        IconClass: 'bx bx-envelope'
      }
    ]
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
