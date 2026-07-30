// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { EnrollmentService } from '../../services/enrollment';
// import { Course } from '../../models/course.model';
//
// @Component({
//   selector: 'app-student-profile',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './student-profile.html',
//   styleUrl: './student-profile.css',
// })
// export class StudentProfile implements OnInit {
//   // Personal details
//   studentName = 'Alex';
//   studentId = 'STU-10293';
//   email = 'alex@university.edu';
//   program = 'Computer Science & Engineering';
//   semester = '6th Semester';
//   gpa = 3.8;
//
//   // Enrolled courses list loaded from service
//   enrolledCourses: Course[] = [];
//
//   constructor(private enrollmentService: EnrollmentService) {}
//
//   ngOnInit(): void {
//     // FIX: Use subscription to assign data to the enrolledCourses array
//     this.enrollmentService.getEnrolledCourses().subscribe({
//       next: (courses) => {
//         this.enrolledCourses = courses;
//       },
//       error: (err) => {
//         console.error('Failed to load enrolled courses', err);
//       },
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseStateService } from '../../services/course-state';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrls: ['./student-profile.css'],
})
export class StudentProfileComponent implements OnInit {
  // Student Profile Information Properties
  studentName: string = 'Alex Johnson';
  studentId: string = 'S109283';
  email: string = 'alex.johnson@university.edu';
  program: string = 'Computer Science';
  semester: number = 4;
  gpa: number = 3.8;

  // Enrolled Courses derived from the global state store
  enrolledCourses: Course[] = [];

  constructor(private courseStateService: CourseStateService) {}

  ngOnInit(): void {
    // Trigger loading courses into the global store if not already present
    this.courseStateService.loadCourses();

    // Subscribe to the clean enrolledCourses$ stream from the state service
    this.courseStateService.courses$.subscribe((courses) => {
      this.enrolledCourses = courses;
    });
  }
}
