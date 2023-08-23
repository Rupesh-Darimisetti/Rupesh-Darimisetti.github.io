import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Rupesh Darimisetti'],
    ['DOB', '12/08/2002'],
    ['Work Exp', '1 Year'],
    ['Education', 'B.Tech (2023)'],
    ['Intrests', 'Batminton'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Graduate in Mechanical engineer',
    'Currently working on software devlopment'
  ];
  constructor() { }

  ngOnInit(): void { }
}
