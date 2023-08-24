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
      technologies: 'Html, Css, JS',
      description: [
        'Used to show images of flower from thumbnail to large screen',
        'A description of image where the picture'
      ],
      live: 'https://imagepreview2.netlify.app/',
      code: 'https://github.com/Rupesh-Darimisetti/Image_previewer'
    },
    // {
    //   title: '',
    //   technologies: '',
    //   description: [],
    //   live: '',
    //   code: ''
    // },
  ]
  constructor() { }
  ngOnInit(): void { }
}
