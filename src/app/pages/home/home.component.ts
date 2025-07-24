import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  template: `
  <div class="hero-image" style="background-image: url('/hero.jpg'); height: 300px; background-size: cover; background-position: center;">
    <p>Join us in worship, fellowship, and community service.</p>
    <p>Explore our latest events, sermons, and community activities.</p>
    <p>We are committed to spreading the love of Christ and serving our community.</p>
    <p>Check out our upcoming events and join us for worship services.</p>
    <p>For inquiries, please contact us via email or phone.</p>
    <p>Thank you for visiting our church website. We look forward to seeing you!</p>
   </div>
    <mat-card>
      <mat-card-header>
        <mat-card-title style="color: black; font-weight: bold;"></mat-card-title>
      </mat-card-header>
      <mat-card-content>
       
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" [routerLink]="['/about']" routerLinkActive="router-link-active" >Join Us</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
  .hero-image { padding: 2rem; text-align: center; background-color: rgba(211, 50, 50, 0.8); border-radius: 10px; }
    mat-card { max-width: 800px; margin: auto; display: flex; flex-direction: column; align-items: center; background-image: url('/ack4.jpg'); background-size: cover; color: white; }
  `]
})
export class HomeComponent {}
