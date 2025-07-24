import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  template: `
    <h2>Upcoming Events</h2>
    <div class="cards">
      <mat-card *ngFor="let event of events">
        <mat-card-header>
          <mat-card-title>{{ event.title }}</mat-card-title>
          <mat-card-subtitle>{{ event.date }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>{{ event.description }}</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; }
  `]
})
export class EventsComponent implements OnInit {
  events: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getEvents().subscribe(data => this.events = data);
  }
}
