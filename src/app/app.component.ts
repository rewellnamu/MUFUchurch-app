import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  template: `
    <header class="header">
      <div class="logo">
        <mat-icon>church</mat-icon>
        <h1 style="color: yellow;">ACK MUFU</h1>
      </div>
      <nav>
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><mat-icon>home</mat-icon> Home</a>
        <a routerLink="about" routerLinkActive="active"><mat-icon>info</mat-icon> About</a>
        <a routerLink="events" routerLinkActive="active"><mat-icon>event</mat-icon> Events</a>
        <a routerLink="sermons" routerLinkActive="active"><mat-icon>video_library</mat-icon> Sermons</a>
        <a routerLink="contact" routerLinkActive="active"><mat-icon>contact_mail</mat-icon> Contact</a>
      </nav>
    </header>
    <main [@routeAnimations]="o.isActivated && o.activatedRoute.routeConfig?.path">
    <h2 style="color: yellow; background-color: rgba(0, 0, 0, 0.5); padding: 1rem; border-radius: 5px;">Welcome to ACK MUFU Church</h2>

      <router-outlet #o="outlet"></router-outlet>
    </main>
  <footer class="footer">
    <p>&copy; 2023 ACK MUFU. All rights reserved.</p>
    <p>Follow us on <a href="https://facebook.com/ackmufu" target="_blank">Facebook</a> | <a href="https://twitter.com/ackmufu" target="_blank">Twitter</a></p>
    <p>Contact us at <a href="mailto:info@ackmufu.org">infoackmufu.org</a></p>
  </footer>
  `,
  styles: [`
    .header { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #2d3e50; color: white; font-family: Arial, sans-serif; }
    .logo { display: flex; align-items: center; gap: 10px; }
    nav a { margin: 0 10px; text-decoration: none; color: white; font-weight: bold; display: inline-flex; align-items: center; gap: 5px; }
    nav a.active { border-bottom: 2px solid yellow; }
    .footer { text-align: center; padding: 1rem; background: #2d3e50; color: white; font-family: Arial, sans-serif; }
    .footer a { color: yellow; text-decoration: none; }
    
    main { padding: 2rem; background-image: url('/ACK.jpg'); background-size: cover; color: white; min-height: 100vh;  }
  `],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent {}
