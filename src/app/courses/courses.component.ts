import { Component, OnInit } from '@angular/core';
import { Course } from './courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        image: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'November, 2, 2019'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        image: '/assets/images/http.png',
        price: 45.99,
        code: 'LKL-1094',
        duration: 80,
        rating: 4,
        releaseDate: 'November, 4, 2019'
      },
    ]
  }

}
