import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Contact Us</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form>
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Your Name">
          </mat-form-field>
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Email</mat-label>
            <input matInput type="email" placeholder="Your Email">
          </mat-form-field>
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Message</mat-label>
            <textarea matInput rows="4"></textarea>
          </mat-form-field>
          <button mat-raised-button color="primary">Send Message</button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .full-width { width: 100%; }
    mat-card { max-width: 500px; margin: auto; }
  `]
})
export class ContactComponent {}
