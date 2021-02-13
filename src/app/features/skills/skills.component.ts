import { Component, OnInit } from '@angular/core';
import { SkillsItem } from 'src/app/shared/Models/skills-item';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills: SkillsItem[];
  ngOnInit() {
    this.skills = [
      {
        Name: 'C#/.Net Development',
        Level: 90
      },
      {
        Name: 'Azure',
        Level: 70
      },
      {
        Name: 'Azure DevOps',
        Level: 80
      },
      {
        Name: 'DevOps',
        Level: 70
      },
      {
        Name: 'CI/CD',
        Level: 75
      },
      {
        Name: 'Back-end Development',
        Level: 80
      },
      {
        Name: 'Front-end Development',
        Level: 75
      },
      {
        Name: 'Technical Architect',
        Level: 70
      },
      {
        Name: 'Leadership',
        Level: 80
      },
      {
        Name: 'Scrum Master',
        Level: 80
      }
    ]
  }
}
