import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { IPerson, ILecture } from '../../models/home.model';

@Component({
  selector: 'app-select-teacher',
  templateUrl: './select-teacher.component.html',
  styleUrls: ['./select-teacher.component.css']
})
export class SelectTeacherComponent implements OnInit {

  teachers;
  lectures;
  lecture:number = 0;
  lectureName:ILecture;

  constructor(private route:ActivatedRoute,private homeService:HomeService) { }

  ngOnInit() {
    this.teachers = this.route.snapshot.data['teachers'].result.items as IPerson[];
    this.lectures = this.route.snapshot.data['lectures'].result.items as ILecture[];

    this.homeService.selectLecture$.subscribe(
      lecture=>{
        this.lecture = lecture;
        this.lectureName = this.lectures.find(obj => {
          return obj.id === lecture
        })
      }
    )
  }

}
