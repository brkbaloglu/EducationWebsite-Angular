import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  coursesitems= [
    {
      id:1,
      courseName:"HTML Course",
      courseDescription: "HTML Course",
      courseTeacher: "Emily Brookes",
      coursePrice:250,
      courseImage: "../../../assets/img/html.png"
    },
    {
      id:2,
      courseName:"CSS Course",
      courseDescription: "CSS Course",
      courseTeacher: "Aaron Hayward",
      coursePrice:280,
      courseImage: "../../../assets/img/css.jpg"
    },
    {
      id:3,
      courseName:"SASS/SCSS Course",
      courseDescription: "SASS/SCSS Course",
      courseTeacher: "Aaron Hayward",
      coursePrice:300,
      courseImage: "../../../assets/img/SCSS.webp"
    },
    {
      id:4,
      courseName:"Javascript Course",
      courseDescription: "Javascript/jQuery Course",
      courseTeacher: "Charlie Bartlett",
      coursePrice:320,
      courseImage: "../../../assets/img/javascript.jpeg"
    },
    {
      id:5,
      courseName:"PHP Course",
      courseDescription: "PHP Course",
      courseTeacher: "Patrick Walters",
      coursePrice:340,
      courseImage: "../../../assets/img/php.jpg"
    },
    {
      id:6,
      courseName:"Angular Course",
      courseDescription: "Angular Course",
      courseTeacher: "Charlie Bartlett",
      coursePrice:350,
      courseImage: "../../../assets/img/angular.png"
    },
    {
      id:7,
      courseName:"Python Course",
      courseDescription: "Python Course",
      courseTeacher: "Charlie Bartlett",
      coursePrice:250,
      courseImage: "../../../assets/img/python.png"
    },
    {
      id:8,
      courseName:"Math Course",
      courseDescription: "Math Course",
      courseTeacher: "Patrick Walters",
      coursePrice:310,
      courseImage: "../../../assets/img/math.avif"
    },
    
  ];
}
