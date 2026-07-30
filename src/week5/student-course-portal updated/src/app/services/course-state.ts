import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { CourseService } from './course';

export interface CourseState {
  courses: Course[];
  enrolledIds: number[];
  isLoading: boolean;
}

const initialState: CourseState = {
  courses: [],
  enrolledIds: [],
  isLoading: false,
};

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {
  private state$ = new BehaviorSubject<CourseState>(initialState);

  public readonly courses$: Observable<Course[]> = this.state$.pipe(map((s) => s.courses));
  public readonly enrolledCount$: Observable<number> = this.state$.pipe(
    map((s) => s.enrolledIds.length),
  );
  public readonly isLoading$: Observable<boolean> = this.state$.pipe(map((s) => s.isLoading));

  constructor(private courseService: CourseService) {}

  private get snapshot(): CourseState {
    return this.state$.value;
  }

  // loadCourses(): void {
  //   if (this.snapshot.courses.length > 0) return;
  //
  //   this.setState({ isLoading: true });
  //   this.courseService.getCourses().subscribe({
  //     next: (courses) => this.setState({ courses, isLoading: false }),
  //     error: () => this.setState({ isLoading: false }),
  //   });
  // }

  loadCourses(): void {
    // If we already have courses in memory, DO NOT hit the API again!
    if (this.snapshot.courses.length > 0) {
      return;
    }

    this.setState({ isLoading: true });
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.setState({ courses, isLoading: false });
      },
      error: (err) => {
        console.error('Failed to load courses', err);
        this.setState({ isLoading: false });
      },
    });
  }
  enrollCourse(courseId: number): void {
    const currentEnrolled = this.snapshot.enrolledIds;
    if (!currentEnrolled.includes(courseId)) {
      this.setState({ enrolledIds: [...currentEnrolled, courseId] });
    }
  }

  private setState(partialState: Partial<CourseState>): void {
    this.state$.next({
      ...this.snapshot,
      ...partialState,
    });
  }
}
