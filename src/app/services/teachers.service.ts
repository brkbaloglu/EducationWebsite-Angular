import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }

  teacheritems= [
    {
      id:1,
      teacherName:"Emily Brookes",
      teacherAutobiography:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies blandit lacus, at scelerisque turpis convallis ac. Sed sit amet rhoncus neque, sit amet porttitor orci. Nullam quis est convallis, egestas massa quis, dictum nibh. Praesent semper orci justo, sed gravida mauris viverra et. Suspendisse faucibus augue lacus, ut accumsan velit interdum maximus. Maecenas convallis, sapien vitae ultrices tincidunt, nisl lectus scelerisque turpis, ut suscipit nulla odio id sem. Praesent at lorem ante. Praesent ultrices purus id est sagittis euismod. Sed vitae quam quis nisl finibus porta vel ac dolor. Morbi vitae semper sapien, in volutpat neque. Sed ultrices nisl a turpis feugiat facilisis. Donec tristique nibh eget urna iaculis ullamcorper. Fusce ac leo pretium magna volutpat lacinia. Maecenas est nisi, euismod eget facilisis quis, placerat sed nunc.",
      teacherPhone:"443-556-1485",
      teacherAge:"51",
      teacherEmail:"emilybrookes@email.com",
      teacherCourses: "HTML Course",
      teacherImage: "../../../assets/img/coach-g5e8ce3d71_1920.jpg"
    },
    {
      id:2,
      teacherName:"Aaron Hayward",
      teacherAutobiography:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies blandit lacus, at scelerisque turpis convallis ac. Sed sit amet rhoncus neque, sit amet porttitor orci. Nullam quis est convallis, egestas massa quis, dictum nibh. Praesent semper orci justo, sed gravida mauris viverra et. Suspendisse faucibus augue lacus, ut accumsan velit interdum maximus. Maecenas convallis, sapien vitae ultrices tincidunt, nisl lectus scelerisque turpis, ut suscipit nulla odio id sem. Praesent at lorem ante. Praesent ultrices purus id est sagittis euismod. Sed vitae quam quis nisl finibus porta vel ac dolor. Morbi vitae semper sapien, in volutpat neque. Sed ultrices nisl a turpis feugiat facilisis. Donec tristique nibh eget urna iaculis ullamcorper. Fusce ac leo pretium magna volutpat lacinia. Maecenas est nisi, euismod eget facilisis quis, placerat sed nunc.",
      teacherPhone:"517-717-4851",
      teacherAge:"43",
      teacherEmail:"aaronhayward@email.com",
      teacherCourses: "CSS Course, SASS/SCSS Course",
      teacherImage: "../../../assets/img/man-gf7e0f1eef_1920.jpg"
    },
    {
      id:3,
      teacherName:"Charlie Bartlett",
      teacherAutobiography:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies blandit lacus, at scelerisque turpis convallis ac. Sed sit amet rhoncus neque, sit amet porttitor orci. Nullam quis est convallis, egestas massa quis, dictum nibh. Praesent semper orci justo, sed gravida mauris viverra et. Suspendisse faucibus augue lacus, ut accumsan velit interdum maximus. Maecenas convallis, sapien vitae ultrices tincidunt, nisl lectus scelerisque turpis, ut suscipit nulla odio id sem. Praesent at lorem ante. Praesent ultrices purus id est sagittis euismod. Sed vitae quam quis nisl finibus porta vel ac dolor. Morbi vitae semper sapien, in volutpat neque. Sed ultrices nisl a turpis feugiat facilisis. Donec tristique nibh eget urna iaculis ullamcorper. Fusce ac leo pretium magna volutpat lacinia. Maecenas est nisi, euismod eget facilisis quis, placerat sed nunc.",
      teacherPhone:"720-863-3947",
      teacherAge:"34",
      teacherEmail:"chaliebartlett@email.com",
      teacherCourses: "Javascript Course, Angular Course, Python Course",
      teacherImage: "../../../assets/img/model-gccc9a36f4_1920.jpg"
    },
    {
      id:4,
      teacherName:"Patrick Walters",
      teacherAutobiography:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies blandit lacus, at scelerisque turpis convallis ac. Sed sit amet rhoncus neque, sit amet porttitor orci. Nullam quis est convallis, egestas massa quis, dictum nibh. Praesent semper orci justo, sed gravida mauris viverra et. Suspendisse faucibus augue lacus, ut accumsan velit interdum maximus. Maecenas convallis, sapien vitae ultrices tincidunt, nisl lectus scelerisque turpis, ut suscipit nulla odio id sem. Praesent at lorem ante. Praesent ultrices purus id est sagittis euismod. Sed vitae quam quis nisl finibus porta vel ac dolor. Morbi vitae semper sapien, in volutpat neque. Sed ultrices nisl a turpis feugiat facilisis. Donec tristique nibh eget urna iaculis ullamcorper. Fusce ac leo pretium magna volutpat lacinia. Maecenas est nisi, euismod eget facilisis quis, placerat sed nunc.",
      teacherPhone:"413-398-8695",
      teacherAge:"47",
      teacherEmail:"patrickwalters@email.com",
      teacherCourses: "PHP Course, Math Course",
      teacherImage: "../../../assets/img/young-g5cbb36d32_1920.jpg"
    },
  
  ];
}
