import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Update the import path below if your DataService is located elsewhere
import { DataService } from '../../services/data.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  template: `
    <mat-card>
      <mat-card>
        <mat-card-header>
          <mat-card-title>Contact Us</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form (ngSubmit)="onSubmit()">
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Name</mat-label>
              <input
                matInput
                placeholder="Your Name"
                [(ngModel)]="contactData.name"
                name="name"
              />
            </mat-form-field>
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Email</mat-label>
              <input
                matInput
                type="email"
                placeholder="Your Email"
                [(ngModel)]="contactData.email"
                name="email"
              />
            </mat-form-field>
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Message</mat-label>
              <textarea
                matInput
                rows="4"
                [(ngModel)]="contactData.message"
                name="message"
              ></textarea>
            </mat-form-field>
            <button mat-raised-button color="primary" type="submit">
              Send Message
            </button>
          </form>
          <p
            *ngIf="responseMessage"
            [style.color]="
              responseMessage === 'Failed to send message. Please try again.'
                ? 'red'
                : 'green'
            "
            style="margin-top: 10px;"
          >
            {{ responseMessage }}
          </p>
        </mat-card-content>
      </mat-card>
    </mat-card>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
      mat-card {
        max-width: 500px;
        margin: auto;
      }
    `,
  ],
})
export class ContactComponent {
  contactData = { name: '', email: '', message: '' };
  responseMessage = '';

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.sendContactMessage(this.contactData).subscribe({
      next: (res) => (this.responseMessage = res.message),
      error: () =>
        (this.responseMessage = 'Failed to send message. Please try again.'),
    });
  }
}
