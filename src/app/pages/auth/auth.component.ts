import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [FormsModule, CommonModule], // Import required modules
})
export class AuthComponent {
  isSubmitting = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onLogin(authForm: any) {
    if (authForm.valid) {
      this.isSubmitting = true;
      this.authService.login(authForm.value).subscribe(
        (response) => {
          console.log('Login successful:', response);
          alert('Login successful!');
          this.isSubmitting = false;
          authForm.reset();
        },
        (error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'An error occurred while logging in.';
          this.isSubmitting = false;
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}
