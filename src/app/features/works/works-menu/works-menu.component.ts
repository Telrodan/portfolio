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
        projectName: 'User Tracking',
        projectDescription:
          'This is a user tracking app. I created this project to practice CRUD operations and NgRx. (not finished)',
        projectTechnologies: ['HTML', 'SCSS', 'Angular', 'NgRx', 'PrimeNG'],
        projectDemoUrl: 'https://knb-portfolio.hu/#/works/user-tracking',
        projectCodeUrl:
          'https://github.com/Telrodan/portfolio/tree/master/src/app/features/works/user-tracking',
      },
      {
        projectName: 'To-do List (Angular)',
        projectDescription:
          'This is a to-do list app, with editable lists and tasks. I created this project to practice CRUD operations and RxJs.',
        projectTechnologies: ['HTML', 'SCSS', 'Angular', 'RxJs', 'PrimeNG'],
        projectDemoUrl: 'https://knb-portfolio.hu/#/works/todo-list',
        projectCodeUrl:
          'https://github.com/Telrodan/prortfolio/tree/master/src/app/features/works/todo-list',
      },
      {
        projectName: 'Natours',
        projectDescription: 'This is a SCSS course project.',
        projectTechnologies: ['HTML', 'SCSS'],
        projectDemoUrl: 'https://telrodan.github.io/Natours/',
        projectCodeUrl: 'https://github.com/Telrodan/Natours/',
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
