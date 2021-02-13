import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myage: number;
  SlideOptions = {
    items: 3,
    dots: true,
    nav: false,
    autoplay: true,
    loop: true
  };
  Images = [
    '../../../assets/images/Badges/psdi.png',
    '../../../assets/images/Badges/azure-developer-associate_198x198.png',
    '../../../assets/images/Badges/ms-devops_198x198.png'
    ];

  constructor() { }

  ngOnInit() {
    const hasMoreBadges = this.Images.length > 3;
    this.SlideOptions.autoplay = hasMoreBadges;
    this.SlideOptions.loop = hasMoreBadges;
    this.CalculateAge();
  }

  public CalculateAge(): void {
    const birthdate = "01/27/1989";
      var timeDiff = Math.abs(Date.now() - new Date(birthdate).getTime());
      this.myage = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
