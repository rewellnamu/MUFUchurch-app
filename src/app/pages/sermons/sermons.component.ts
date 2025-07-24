import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe'; // Assuming you have a pipe to sanitize URLs


@Component({
  selector: 'app-sermons',
  standalone: true,
  imports: [MatCardModule, CommonModule, SafeUrlPipe],
  providers: [DataService],
  template: `
    <h2>Latest Sermons</h2>
    <div class="cards">
      <mat-card *ngFor="let sermon of sermons">
        <mat-card-header>
          <mat-card-title>{{ sermon.title }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <iframe width="100%" height="315" [src]="sermon.videoUrl | safeUrl" frameborder="0" allowfullscreen></iframe>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; }
    iframe { border-radius: 8px; }
  `]
})
export class SermonsComponent implements OnInit {
  sermons: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSermons().subscribe(data => this.sermons = data);
  }
}
