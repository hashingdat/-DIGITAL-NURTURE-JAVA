import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private enrolledCount = 0;

  getEnrolledCount(): number {
    return this.enrolledCount;
  }

  enrollCourse(): void {
    this.enrolledCount++;
    console.log('Course enrolled successfully');
  }
}
