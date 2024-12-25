import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, CommonModule], // No need for HttpClientModule
})
export class ContactComponent {
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      this.isSubmitting = true;
      this.contactService.submitContactForm(contactForm.value).subscribe(
        (response) => {
          this.successMessage = 'Message sent successfully!';
          contactForm.reset();
          this.isSubmitting = false;
        },
        (error) => {
          this.errorMessage = 'Failed to send message. Please try again.';
          this.isSubmitting = false;
        }
      );
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
}
