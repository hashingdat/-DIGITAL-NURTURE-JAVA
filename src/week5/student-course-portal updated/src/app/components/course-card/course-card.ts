// import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HighlightDirective } from '../../directives/highlight';
// import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
//
// @Component({
//   selector: 'app-course-card',
//   imports: [CommonModule, HighlightDirective, CreditLabelPipe], // 👈 Directives & Pipes imported here
//   templateUrl: './course-card.html',
//   styleUrl: './course-card.css',
// })
// export class CourseCard implements OnChanges {
//   @Input() course: any;
//   @Input() isEnrolled: boolean = false;
//   @Output() enroll = new EventEmitter<any>();
//
//   isExpanded: boolean = false;
//
//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['course']) {
//       console.log('CourseCard loaded:', changes['course'].currentValue?.name);
//     }
//   }
//
//   get cardClasses() {
//     return {
//       'card--enrolled': this.isEnrolled,
//       'card--full': this.course?.credits >= 4,
//       expanded: this.isExpanded,
//     };
//   }
//
//   get cardStyles() {
//     let borderColor = 'grey';
//     if (this.course?.gradeStatus === 'passed') borderColor = 'green';
//     if (this.course?.gradeStatus === 'failed') borderColor = 'red';
//
//     return {
//       'border-left': `6px solid ${borderColor}`,
//     };
//   }
//
//   toggleDetails(): void {
//     this.isExpanded = !this.isExpanded;
//   }
//
//   enrollCourse(): void {
//     this.enroll.emit(this.course);
//   }
// }

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card';
import { By } from '@angular/platform-browser';
import { SimpleChanges, SimpleChange } from '@angular/core';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent], // If using standalone components
      // declarations: [CourseCardComponent] // Use this if using NgModules instead
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Step 102: Verify component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: Test @Input rendering
  it('should render course details correctly from @Input', () => {
    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
    };
    fixture.detectChanges(); // Trigger change detection

    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleElement.textContent).toContain('Data Structures');
  });

  // Step 104: Test @Output event emission
  it('should emit enrollRequested event with course id when enroll button is clicked', () => {
    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
    };
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Step 105: Test ngOnChanges lifecycle hook
  it('should log previous and current values on ngOnChanges', () => {
    spyOn(console, 'log');

    const changes: SimpleChanges = {
      course: new SimpleChange(null, { id: 1, name: 'Angular' }, true),
    };

    component.ngOnChanges(changes);
    expect(console.log).toHaveBeenCalled();
  });
});
