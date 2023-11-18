import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Java',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'Angular Typescript, Angular Material UI',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'C, C++',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'Python 3',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'SQL',
      level: 'Beginner',
      rating: 30,
    },
    {
      name: 'Spring Boot',
      level: 'Beginner',
      rating: 20,
    },
  ]
  constructor() { }
  ngOnInit(): void { }
}
