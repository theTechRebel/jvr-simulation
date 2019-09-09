import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ILecture, IPerson } from '../../models/home.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-lectures',
  templateUrl: './list-lectures.component.html',
  styleUrls: ['./list-lectures.component.css']
})
export class ListLecturesComponent implements OnInit{

  lectures:ILecture[]=[];
  existingStudents:IPerson[]=[];

  ngOnInit(): void {
    if(this.route.snapshot.data['lectures'].result)
      this.lectures = this.route.snapshot.data['lectures'].result.items as ILecture[];
    
  }
  
  constructor(private route:ActivatedRoute,private homeService:HomeService) { 
  }

  selectLecture(lecture:number){
    this.homeService.selectLecture(lecture);
  }
}
