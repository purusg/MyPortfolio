import { Component, OnInit } from '@angular/core';
import { TechStack } from 'src/app/shared/Models/tech-stack';
import * as AOS from 'aos'
import { StickyNote } from 'src/app/shared/Models/sticky-note';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss']
})
export class TechstackComponent implements OnInit {

  constructor() { }

  techStackLogos: TechStack[];
  stickyNoteData: StickyNote[];
  SlideOptions = {
    items: 10,
    dots: true,
    nav: false,
    autoplay: true,
    loop: true
  };

  ngOnInit() {

    this.getTechStackLogos();
    this.getTechStackForStickyNote();

    const hasMoreBadges = this.techStackLogos.length > 2;
    this.SlideOptions.autoplay = hasMoreBadges;
    this.SlideOptions.loop = hasMoreBadges;
  }

  getTechStackLogos() {
    this.techStackLogos = [
      { name: 'C#', title: 'CSharp', img: '../../../assets/images/TechStacks/c-sharp-logo-100.png' },
      { name: 'Asp.Net', title: 'DotNet', img: '../../../assets/images/TechStacks/aspnet.png' },
      { name: 'NetCore', title: 'DotNetCore', img: '../../../assets/images/TechStacks/NET_Core_Logo.png' },
      { name: 'Azure', title: 'Azure', img: '../../../assets/images/TechStacks/azure.svg' },
      { name: 'Angular', title: 'Angular', img: '../../../assets/images/TechStacks/angular.svg' },
      { name: 'Docker', title: 'Docker', img: '../../../assets/images/TechStacks/docker-144.png' },
      { name: 'K8s', title: 'Kubernetes', img: '../../../assets/images/TechStacks/kubernetes-144.png' },
      { name: 'WebAPI', title: 'WebAPI', img: '../../../assets/images/TechStacks/webapi.png' },
      { name: 'SQL Server', title: 'SQL Server', img: '../../../assets/images/TechStacks/microsoftsqlserver.png' },
      { name: 'Git', title: 'GitHub', img: '../../../assets/images/TechStacks/Github_logo.png' },
      { name: 'HTML', title: 'HTML5', img: '../../../assets/images/TechStacks/HTML5.png' },
      { name: 'Css', title: 'CSS', img: '../../../assets/images/TechStacks/css3-logo.png' },
      { name: 'Linq', title: 'Linq', img: '../../../assets/images/TechStacks/linq.png' },
      { name: 'Powershell', title: 'Powershell', img: '../../../assets/images/TechStacks/powershell.png' },
      { name: 'Sass', title: 'SASS', img: '../../../assets/images/TechStacks/sass-144.png' },
      { name: 'Signalr', title: 'SignalR', img: '../../../assets/images/TechStacks/SignalR.png' },
      { name: 'Slack', title: 'Slack', img: '../../../assets/images/TechStacks/slack-logo-icon.png' },
      { name: 'Trello', title: 'Trello', img: '../../../assets/images/TechStacks/Trello.png' },
      { name: 'Postman', title: 'Postman', img: '../../../assets/images/TechStacks/postman.svg' }
    ]
  }

  getTechStackForStickyNote() {
    this.stickyNoteData = [
      {
        title: 'Programming', delimeter: ',   ', data: ['.Net 4.6.1', 'C#.Net', '.Net Core3.1', 'Web API',
          'LINQ', 'HTML5', 'Angular8', 'Typescript', 'SignalR', 'ECMA6', 'Ajax', 'CSS3', 'SASS',
          'Angular Material', 'ag-grid', 'amCharts', 'Nodejs', 'MS Test']
      },
      {
        title: 'Cloud Programming', delimeter: ',   ', data: ['Azure', 'Logical Apps', 'Azure functions', 'IaaS', 'PaaS',
          'Azure AD', 'Service Fabric', 'Service Bus', 'Docker', 'Kubernetes', 'Azure Container Instances']
      },
      {
        title: 'Softwares', delimeter: ',   ', data: ['Visual Studio 2019', 'Visual Studio Code', 'Azure storage explorer',
          'Redis', 'Postman', 'Fiddler', 'SoapUI', 'GitHub Desktop', 'Service bus explorer', 'Docker Desktop']
      },
      {
        title: 'Database', delimeter: ',   ', data: ['SQL Server 2012', 'Azure Storage', 'MySQL', 'SqlLite']
      },
      {
        title: 'Methodologies', delimeter: ',   ', data: ['Agile', 'ART (Agile Release Train)', 'Scrum', 'Design Thinking']
      },
      {
        title: 'Others', delimeter: ',   ', data: ['SOLID Principles', 'Design Patterns', 'Git', 'Team Foundation Server',
          'Tortoise SVN', 'Jenkins', 'TeamCity', 'Octopus', 'Slack', 'Trello', 'Azure Cli', 'PowerShell']
      }
    ]
  }

}
