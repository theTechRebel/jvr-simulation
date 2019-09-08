import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILecture } from './models/home.model';
import { HomeService } from './services/home.service';


@Component({
  templateUrl: './home.component.html',
  styles: [`
            main{ margin-top:20px;};
            .row > div { margin:10px};
          `]
})
export class HomeComponent {

}