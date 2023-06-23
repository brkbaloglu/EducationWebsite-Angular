import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courseitems:any;

  constructor(private service: CoursesService){}

  ngOnInit():void{
    this.courseitems = this.service.coursesitems;
  }

}
