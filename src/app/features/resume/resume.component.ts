import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  experienceDuration: { numYears: number; numMonths: number; numDays: number; };

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calculateExperience();
  }

  calculateExperience() {
    const exp1startDate = new Date('2013-08-05');
    const exp1EndDate = new Date('2014-09-30');
    const exp1 = this.calendarService.calcExp(exp1EndDate, exp1startDate);

    const exp2startDate = new Date('2014-11-12');
    const exp2EndDate = new Date('2016-08-30');
    const exp2 = this.calendarService.calcExp(exp2EndDate, exp2startDate);

    const exp3startDate = new Date('2016-09-16');
    const exp3EndDate = new Date('2018-02-28');
    const exp3 = this.calendarService.calcExp(exp3EndDate, exp3startDate);

    const exp4startDate = new Date('2018-03-05');
    const exp4EndDate = new Date('2019-04-30');
    const exp4 = this.calendarService.calcExp(exp4EndDate, exp4startDate);

    const exp5startDate = new Date('2019-06-03');
    const exp5EndDate = new Date();
    const exp5 = this.calendarService.calcExp(exp5EndDate, exp5startDate);

    const ExperienceInDays = (exp1 + exp2 + exp3 + exp4 + exp5);
    this.experienceDuration = this.calendarService.humanise(ExperienceInDays);
  }
}
