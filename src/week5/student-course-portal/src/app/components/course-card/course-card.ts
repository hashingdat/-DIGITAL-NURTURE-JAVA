import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, HighlightDirective, CreditLabelPipe], // 👈 Directives & Pipes imported here
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course: any;
  @Input() isEnrolled: boolean = false;
  @Output() enroll = new EventEmitter<any>();

  isExpanded: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCard loaded:', changes['course'].currentValue?.name);
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded,
    };
  }

  get cardStyles() {
    let borderColor = 'grey';
    if (this.course?.gradeStatus === 'passed') borderColor = 'green';
    if (this.course?.gradeStatus === 'failed') borderColor = 'red';

    return {
      'border-left': `6px solid ${borderColor}`,
    };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  enrollCourse(): void {
    this.enroll.emit(this.course);
  }
}
