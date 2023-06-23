import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  reviewitems:any;

  constructor(private service: ReviewService){}

  ngOnInit():void{
    this.reviewitems = this.service.reviewitems;
  }
}
