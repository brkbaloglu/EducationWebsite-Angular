import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  }, {
    path: "about",
    component:AboutComponent
  }, {
    path: "courses",
    component: CoursesComponent
  }, {
    path: "teachers",
    component: TeachersComponent
  }, {
    path: "reviews",
    component: ReviewsComponent
  }, {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
