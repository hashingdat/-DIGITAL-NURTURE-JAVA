import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  selectedCourseId: number | null = null;

  courses = [
    {
      id: 1,
      name: 'Java Programming',
      description: 'Learn the fundamentals of Java programming and object-oriented concepts.',
      credits: 4,
      gradeStatus: 'passed',
    },
    {
      id: 2,
      name: 'Database Management Systems',
      description: 'Learn database concepts, SQL, and database design.',
      credits: 4,
      gradeStatus: 'pending',
    },
    {
      id: 3,
      name: 'Web Development',
      description: 'Learn modern web development using HTML, CSS, JavaScript, and Angular.',
      credits: 3,
      gradeStatus: 'failed',
    },
  ];

  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('CourseList: Timer started');
    setTimeout(() => {
      console.log('CourseList: 1.5s finished - setting isLoading to false');
      this.isLoading = false;
      this.cdr.detectChanges(); // Force UI repaint
    }, 1500);
  }

  onEnroll(course: any) {
    this.selectedCourseId = course.id;
    console.log('Enrolling in course ID:', course.id);
    alert('You have enrolled in ' + course.name + '!');
  }
}
