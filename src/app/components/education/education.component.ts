import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institution: "Baba Institute of Technology and Science",
      course: 'Btech',
      syllabus: 'JNTUK',
      duration: '2020-2023',
      score: '7.05'
    },
    {
      institution: "Government Polytechnic Visakhapatnam",
      course: 'Diploma',
      syllabus: 'AP SBTET',
      duration: '2017-2020',
      score: '76.83%'
    },
    {
      institution: "De Paul School",
      course: 'Matriculation',
      syllabus: 'ICSE',
      duration: '2012-2017',
      score: '75%'
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
