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
    ['Education', 'Bachelor of Technology [Mechanical Engineering -2023]'],
    ['Interests', 'Badminton'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Graduate in Mechanical engineer',
    'Gained Knowledge in MERN Stack through NxtWave',
    'Currently looking for jobs in software development'
  ];
  constructor() { }

  ngOnInit(): void { }
}
