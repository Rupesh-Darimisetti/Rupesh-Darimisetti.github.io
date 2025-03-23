import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Image Viewer',
      technologies: 'HTML, CSS, JavaScript',
      description: [
        'Used to show images of flower from thumbnail to large screen',
        'A description of image where the picture'
      ],
      live: 'https://imagepreview2.netlify.app/',
      code: 'https://github.com/Rupesh-Darimisetti/Image_previewer'
    },
    {
      title: 'To Do App  using Vanilla JavaScript',
      technologies: 'HTML, CSS3, JavaScript',
      description: [
        'used to track ToDo Items with task done and to do',
        'The items are stored in local storage in a cookie format',
        'display date on header of component'
      ],
      live: 'https://todo-vanilla-app.netlify.app/',
      code: 'https://github.com/Rupesh-Darimisetti/ToDoPageVanilla'
    },
    {
      title: 'Task Tracker',
      technologies: 'HTML, Angular Typescript, CSS, JSON Live Serverr',
      description: [
        'track the task to do and completed',
        'dynamically stores data in render JSON Live Server'
      ],
      live: 'https://rupesh-darimisetti.github.io/task-tracker-angular-web-app/',
      code: 'https://github.com/Rupesh-Darimisetti/task-tracker-angular-web-app.git',
    },
    {
      title: 'Asthra 2.0 website',
      technologies: 'HTML, JavaScript, CSS',
      description: [
        'Baba Institute of Technology and Science College Fest Event Website',
        'Used Video and images with description from the faculty giving there valuable message'
      ],
      live: 'https://asthra.netlify.app/',
      code: 'https://github.com/Rupesh-Darimisetti/asthra-2.0',
    },
    {
      title: 'Tic Tack Toe version 2',
      technologies: 'HTML, JavaScript, CSS',
      description: [
        'Done Tic Tac Toe game during hacktoberfest 2022',
        `added music to the background of begining of game`
      ],
      live: 'https://rupesh-darimisetti.github.io/MyTicTacToe/',
      code: 'https://github.com/Rupesh-Darimisetti/MyTicTacToe.git',
    },
    {
      title: 'Web weaver Competetion',
      technologies: 'HTML, CSS, Javascript',
      description: [
        'Build an frontend website for hackathon conducted by IIT Bomaby in the year2021',
        'Nov 19 2021 dec 12 2021'
      ],
      live: 'https://rupesh-darimisetti.github.io/web-weaver/',
      code: 'https://github.com/Rupesh-Darimisetti/web-weaver'
    },
    {
      title: 'NxtTrendz  E-Commerce App',
      technologies: 'React, JWT authentication, CSS',
      description: ['Built an E-commerce app using mock api with checkout page and filter options in product page',
        'Applied the concept learned during the training',
        ' Prime-user: username: rahul password: rahul@2021',
        'NonPrime-user:  username: raja password: raja@2021'
      ],
      live: 'https://rupeshnxtcart.ccbp.tech/',
      code: 'https://github.com/Rupesh-Darimisetti/EnhanceNxtTrendz.git'
    }, {
      title: 'Jobby App',
      technologies: 'React, JWT, CSS, HTML',
      description: ['Built a job searching website using mock api for jobs and profiles',
        'username: rahul, password: rahul@2021'],
      live: 'https://rupeshjobby.ccbp.tech/',
      code: 'https://github.com/Rupesh-Darimisetti/jobby-app.git'
    }
  ]
  constructor() { }
  ngOnInit(): void { }
}
