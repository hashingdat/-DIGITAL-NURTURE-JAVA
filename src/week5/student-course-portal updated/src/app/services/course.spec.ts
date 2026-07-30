import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private enrolledCount = 3;

  getEnrolledCount() {
    return this.enrolledCount;
  }

  enrollCourse() {
    this.enrolledCount++;
  }
}
