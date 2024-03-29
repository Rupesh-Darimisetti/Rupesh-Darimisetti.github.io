import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Rupesh Darimisetti'],
    // ['DOB', '12/08/2002'],
    ['Work Exp', '1 Year'],
    ['Education', 'B.Tech (2023)'],
    ['Interests', 'Badminton, Martial Arts'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Graduate in Mechanical engineer',
    'Currently learning things in software development'
  ];
  constructor() { }

  ngOnInit(): void { }
}
