import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/core/models/work.model';

@Component({
  selector: 'app-works-menu',
  templateUrl: './works-menu.component.html',
  styleUrls: ['./works-menu.component.scss'],
})
export class WorksMenuComponent implements OnInit {
  public workData: Work[];

  constructor() {
    this.workData = [
      {
        projectName: 'To-do List (Angular)',
        projectDescription:
          'This is a to-do app, with editable lists and tasks. I created this project to practice CRUD operations and NgRx.',
        projectTechnologies: ['HTML', 'SCSS', 'Angular', 'NgRx'],
        projectDemoUrl: 'http://localhost:4200/#/works/todo-list',
        projectCodeUrl:
          'https://github.com/Telrodan/prortfolio/tree/master/src/app/features/works/todo-list',
      },
      {
        projectName: 'Projectify',
        projectDescription: 'This is my first SCSS and JavaScript practice project. (not finished)',
        projectTechnologies: ['HTML', 'SCSS', 'JavaScript'],
        projectDemoUrl: 'https://telrodan.github.io/Projectify/',
        projectCodeUrl: 'https://github.com/Telrodan/Projectify/',
      },
      {
        projectName: 'To-do List (JavaScript)',
        projectDescription: 'This is a code along JavaScript project.',
        projectTechnologies: ['HTML', 'CSS', 'JavaScript'],
        projectDemoUrl: 'https://telrodan.github.io/todo-app/',
        projectCodeUrl: 'https://github.com/Telrodan/todo-app',
      },
      {
        projectName: 'Pig Game',
        projectDescription: 'This is a JavaScript course project.',
        projectTechnologies: ['HTML', 'CSS', 'JavaScript'],
        projectDemoUrl: 'https://telrodan.github.io/Pig-Game/',
        projectCodeUrl: 'https://github.com/Telrodan/Pig-Game/',
      },
      {
        projectName: 'Guess My Number',
        projectDescription: 'This is a JavaScript course project.',
        projectTechnologies: ['HTML', 'CSS', 'JavaScript'],
        projectDemoUrl: 'https://telrodan.github.io/Guess-My-Number/',
        projectCodeUrl: 'https://github.com/Telrodan/Guess-My-Number/',
      },
      {
        projectName: 'Natours',
        projectDescription: 'This is a SCSS course project.',
        projectTechnologies: ['HTML', 'SCSS'],
        projectDemoUrl: 'https://telrodan.github.io/Natours/',
        projectCodeUrl: 'https://github.com/Telrodan/Natours/',
      },
      {
        projectName: 'Trillo',
        projectDescription: 'This is a SCSS course project.',
        projectTechnologies: ['HTML', 'SCSS'],
        projectDemoUrl: 'https://telrodan.github.io/Trillo/',
        projectCodeUrl: 'https://github.com/Telrodan/Trillo/',
      },
    ];
  }

  ngOnInit(): void {}

  public onNavigate(url: string) {
    window.open(url, '_blank');
  }
}
