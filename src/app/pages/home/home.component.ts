import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title style="color: black; font-weight: bold;">Welcome to ACK MUFU Church</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p style="color: black;">We are glad you are here! Join us for worship every Sunday at 10 AM.
        <br>
        Our mission is to share love, hope, and faith with everyone in the community.
        <br>
        Explore our latest sermons, upcoming events, and how you can get involved.
        <br>
        Together, we can make a difference in the lives of many.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" [routerLink]="['/about']" routerLinkActive="router-link-active" >Join Us</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card { max-width: 600px; margin: auto; display: flex; flex-direction: column; align-items: center; background-image: url('/ack4.jpg'); background-size: cover; color: white; }
  `]
})
export class HomeComponent {}
