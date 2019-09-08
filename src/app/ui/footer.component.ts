import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="footer">
                <div class="container">
                  <span class="text-muted">My School</span>
                </div>
              </footer>`,
  styles: [``]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}