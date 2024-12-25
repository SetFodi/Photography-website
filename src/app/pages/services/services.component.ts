import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true, // Ensure this component is standalone
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule], // Import CommonModule for *ngFor
})
export class ServicesComponent {
  services = [
    {
      title: 'Wedding Photography',
      description: 'Capturing timeless moments of your special day.',
      icon: 'assets/icons/wedding.png',
    },
    {
      title: 'Event Photography',
      description: 'Highlighting the energy and memories of your events.',
      icon: 'assets/icons/event.png',
    },
    {
      title: 'Portrait Photography',
      description: 'Personalized portraits that bring out your personality.',
      icon: 'assets/icons/portrait.png',
    },
    {
      title: 'Commercial Photography',
      description: 'Professional visuals to elevate your brand.',
      icon: 'assets/icons/commercial.png',
    },
    {
      title: 'Travel Photography',
      description: 'Showcasing the beauty of landscapes and cultures.',
      icon: 'assets/icons/travel.png',
    },
    {
      title: 'Product Photography',
      description: 'Show your products in their best light.',
      icon: 'assets/icons/product.png',
    },
  ];
}
