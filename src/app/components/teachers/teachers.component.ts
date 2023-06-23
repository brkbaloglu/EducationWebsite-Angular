import { Component } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {


  teacheritems:any;

  constructor(private service:TeachersService){}

  ngOnInit():void{
    this.teacheritems = this.service.teacheritems;
  }
}
