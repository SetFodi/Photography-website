import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true, // Ensure this component is standalone
  imports: [CommonModule], // Import CommonModule for *ngFor
})
export class PortfolioComponent {
  projects = [
    { title: 'Wedding Memories', image: 'assets/portfolio1.jpg' },
    { title: 'Event Highlights', image: 'assets/portfolio2.jpg' },
    { title: 'Portraits', image: 'assets/portfolio3.jpg' },
    { title: 'Landscape Magic', image: 'assets/portfolio4.jpg' },
  ];
}
