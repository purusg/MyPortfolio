import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/shared/Models/sticky-note';
import * as AOS from 'aos'

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {
  
  @Input() data: StickyNote[];

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
