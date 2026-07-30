import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseStateService } from '../../services/course-state';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  // Portal metadata & student profile properties
  portalName = 'Student Course Portal';
  studentName = 'Alex';

  // Set default initial values to 0
  courseCount = 0;
  enrolledCount = 0;
  gpa = 3.8;

  // Interactive form & button state properties
  isPortalActive = true;
  message = '';
  searchTerm = '';

  private courseSub?: Subscription;
  private courseState = inject(CourseStateService);

  constructor(
    private router: Router,
    private enrollmentService: EnrollmentService,
  ) {}

  ngOnInit(): void {
    console.log('HomeComponent initialised - reading from course state store');

    // Subscribe to the cached courses stream instead of hitting the API directly
    this.courseSub = this.courseState.courses$.subscribe((courses) => {
      this.courseCount = courses.length;
    });

    // Triggers load only if data isn't already fetched
    this.courseState.loadCourses();
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
    if (this.courseSub) {
      this.courseSub.unsubscribe();
    }
  }

  showMessage(): void {
    this.message = 'Enrollment opened!';
    this.router.navigate(['/enroll']);
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
    this.router.navigate(['/enroll']);
  }
}
