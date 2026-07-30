// import { Component, OnInit, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import { Course } from '../../models/course.model';
//
// @Component({
//   selector: 'app-course-detail',
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   template: `
//     <div *ngIf="course; else notFound" class="course-detail-card">
//       <h2>{{ course.title }}</h2>
//       <p><strong>Category:</strong> {{ course.category }}</p>
//       <p><strong>Description:</strong> {{ course.description }}</p>
//
//       <a routerLink="/courses">← Back to Course Catalog</a>
//     </div>
//
//     <ng-template #notFound>
//       <h3>Course Not Found</h3>
//       <a routerLink="/courses">Return to Catalog</a>
//     </ng-template>
//   `,
// })
// export class CourseDetailComponent implements OnInit {
//   private route = inject(ActivatedRoute);
//   course?: Course;
//
//   ngOnInit(): void {
//     // Read the pre-fetched course data injected by the resolver
//     this.route.data.subscribe((data) => {
//       this.course = data['courseData'];
//     });
//   }
// }


import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  course?: Course;

  ngOnInit(): void {
    // Access resolved data passed via app.routes.ts
    this.route.data.subscribe((data) => {
      this.course = data['courseData'];
    });
  }
}
