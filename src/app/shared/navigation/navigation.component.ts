import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  showFiller = false;
  showMenu = false;
  constructor() { }

  ngOnInit() {
    this.showFiller = true;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
