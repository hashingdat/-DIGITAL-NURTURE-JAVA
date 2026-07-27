import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  // Portal metadata & student profile properties
  portalName = 'Student Course Portal';
  studentName = 'Alex';

  // Dashboard stats required by Hands-On 1 & 2
  courseCount = 12;
  enrolledCount = 3;
  gpa = 3.8;

  // Interactive form & button state properties
  isPortalActive = true;
  message = '';
  searchTerm = '';

  ngOnInit(): void {
    console.log('HomeComponent initialised - courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Method called by (click)="showMessage()" in home.html
  showMessage(): void {
    this.message = 'Enrollment opened!';
  }

  // Backup method if button uses onEnrollClick()
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
