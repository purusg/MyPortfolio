import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.typedInit();
  }

  typedInit() {
    const options = {
      strings: ['Senior .Net Engineer', 'Certified Azure Developer', 'Certified DevOps Engineer', 'Full Stack Developer (.Net)'],
      typeSpeed: 100,
      backSpeed: 40,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }
}
