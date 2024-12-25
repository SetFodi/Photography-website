import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true, // Must be true for standalone components
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'], // Correct plural form
  imports: [CommonModule], // Import CommonModule for Angular directives (optional if not used)
})
export class AboutComponent {}
