import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">My School</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/home']">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/teachers']">Teachers</a>
      </li>
    </ul>
  </div>
</nav>
              `,
  styles: [``]
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

}