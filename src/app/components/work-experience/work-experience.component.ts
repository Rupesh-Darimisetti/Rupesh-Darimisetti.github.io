import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Web Developer Internship',
      company: 'Suvidha Foundation (Suvidha Mahila Mandal)',
      duration: 'Feb 2023 - Apr 2023',
      description: [
        'worked with multiple teams to devlop web application.',
        'worked on different technologies such as html, css'
      ]
    },
    {
      role: 'Web Weaver Hackathon',
      company: 'IIT Bombay (Tech Fest)',
      duration: '19 Nov 2021 - 12 Dec 2021',
      description: [
        'built  multiple pages  web application.',
        'worked on different technologies such as html, css',
        'highlight the hotel maintainence, services, dishes they provided during covid time.',
        'Used Bootstrap , HTML, CSS, marque and most of the HTML5 components'
      ]
    }
  ]
  constructor() { }
  ngOnInit(): void { }
}
