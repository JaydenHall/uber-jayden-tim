import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="body-container">
    <header></header>
    <carousel-dashboard></carousel-dashboard>
  </div>
  `
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'uber-sales';
  }
}
