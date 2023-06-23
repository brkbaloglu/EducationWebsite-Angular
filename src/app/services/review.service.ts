import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  reviewitems = [
    {
      id:1,
      name: "Student 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis pretium venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur tempus risus a elit vulputate dictum. In ornare arcu massa, sit amet commodo sapien dictum et. Curabitur mattis velit arcu, nec lacinia est maximus.",
      image: "../../../assets/img/pic-1.png"
    },
    {
      id:2,
      name: "Student 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis pretium venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur tempus risus a elit vulputate dictum. In ornare arcu massa, sit amet commodo sapien dictum et. Curabitur mattis velit arcu, nec lacinia est maximus.",
      image: "../../../assets/img/pic-2.png"
    },
    {
      id:3,
      name: "Student 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis pretium venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur tempus risus a elit vulputate dictum. In ornare arcu massa, sit amet commodo sapien dictum et. Curabitur mattis velit arcu, nec lacinia est maximus.",
      image: "../../../assets/img/pic-3.png"
    },
    {
      id:4,
      name: "Student 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis pretium venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur tempus risus a elit vulputate dictum. In ornare arcu massa, sit amet commodo sapien dictum et. Curabitur mattis velit arcu, nec lacinia est maximus.",
      image: "../../../assets/img/pic1.png"
    }
  ];
}
