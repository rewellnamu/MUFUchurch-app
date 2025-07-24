import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>About Us</h2>
    <section class="about-section">
    <p>Our church exists to share love, hope, and faith with everyone in the community.</p>
    <p>We believe in the power of prayer, worship, and fellowship to transform lives.</p>
    <p>Join us for our weekly services, community events, and outreach programs.</p>
    <p>We are committed to serving our community and making a positive impact.</p>
    <p>For more information, please contact us or visit our social media pages.</p>
    <p>Thank you for being a part of our church family. We look forward to growing together in faith.</p>
    <p>Follow us on our social media platforms for updates and announcements.</p>
</section>
  `,
  styles: [`
    .about-section { padding: 2rem; background-color: rgba(255, 255, 255, 0.8); border-radius: 10px; color: black; display: flex; flex-direction: column; align-items: center; }
    h2 { color: #2d3e50; }
    p { margin-bottom: 1rem; }
  `]
})
export class AboutComponent {}
