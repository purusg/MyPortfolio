import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

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
    this.typedInit();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  typedInit() {
    const options = {
      strings: ['Senior .Net Engineer', 'Certified Azure Developer', 'Full Stack Developer (.Net)'],
      typeSpeed: 100,
      backSpeed: 40,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }
}
