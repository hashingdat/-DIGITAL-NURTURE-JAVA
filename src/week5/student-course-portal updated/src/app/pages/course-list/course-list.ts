// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { CourseService } from '../../services/course';
// import { Course } from '../../models/course.model';
//
// @Component({
//   selector: 'app-course-list',
//   imports: [CommonModule, RouterLink],
//   templateUrl: './course-list.html',
//   styleUrls: ['./course-list.css'],
// })
// export class CourseListComponent implements OnInit {
//   courses: Course[] = [];
//   isLoading = true;
//   errorMessage = '';
//
//   constructor(
//     private courseService: CourseService,
//     private cdr: ChangeDetectorRef, // <-- 1. Inject ChangeDetectorRef
//   ) {}
//
//   ngOnInit(): void {
//     this.isLoading = true;
//     this.courseService.getCourses().subscribe({
//       next: (data) => {
//         this.courses = data;
//         this.isLoading = false;
//         this.cdr.detectChanges(); // <-- 2. Force Angular to update the UI
//       },
//       error: (err) => {
//         this.errorMessage = err.message;
//         this.isLoading = false;
//         this.cdr.detectChanges();
//       },
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseStateService } from '../../services/course-state';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css'],
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;

  constructor(private courseState: CourseStateService) {
    this.courses$ = this.courseState.courses$;
    this.isLoading$ = this.courseState.isLoading$;
  }

  ngOnInit(): void {
    this.courseState.loadCourses();
  }
}
