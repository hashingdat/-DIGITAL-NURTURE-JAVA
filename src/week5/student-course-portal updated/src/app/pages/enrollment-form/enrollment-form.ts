import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // <-- Import FormsModule & NgForm

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Add FormsModule here
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentFormComponent {
  // Model object to hold form values
  formData = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: 'Odd',
    agreeToTerms: false,
  };

  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      console.log('Is Form Valid?', form.valid);
      this.submitted = true;
    }
  }

  onReset(form: NgForm) {
    form.resetForm({
      preferredSemester: 'Odd',
      agreeToTerms: false,
    });
    this.submitted = false;
  }
}
