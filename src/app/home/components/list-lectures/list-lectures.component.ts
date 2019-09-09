import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ILecture, IPerson } from '../../models/home.model';
import { ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-list-lectures',
  templateUrl: './list-lectures.component.html',
  styleUrls: ['./list-lectures.component.css']
})
export class ListLecturesComponent implements OnInit{

  lectures:ILecture[]=[];
  existingStudents:IPerson[]=[];
  teachers:IPerson[]=[];

  ngOnInit(): void {
    if(this.route.snapshot.data['lectures'].result)
      this.lectures = this.route.snapshot.data['lectures'].result.items as ILecture[];

    if(this.route.snapshot.data['teachers'].result)
      this.teachers = this.route.snapshot.data['teachers'].result.items as IPerson[];
  }
  
  constructor(private route:ActivatedRoute,private homeService:HomeService) { 
  }

  selectLecture(lecture:number){
    this.homeService.selectLecture(lecture);
  }

  addLecture(formVals){
    console.log(formVals);
    formVals.lectureName = formVals.lectureName.trim();
    if(formVals.lectureName){
    var upperCaseNames = this.lectures.map(function(value) {
      return value.description.toUpperCase();
    });
    var pos = upperCaseNames.indexOf(formVals.lectureName.toUpperCase());

    if(pos === -1){
    if (confirm( "Are you sure you want create a "+formVals.lectureName+" lecture?")) {
      var lecture:ILecture = {
        description: formVals.lectureName,
        id :0,
        teacherId: +formVals.lectureTeacher
      }
      this.homeService.LectureServiceCreate(lecture).subscribe(
        response =>{
          if(response.success){
            window.alert(formVals.lectureName+" has been created.");
            var newLecture:ILecture = response.result as ILecture;
            this.lectures.push(newLecture);
          }
        }
      )
    } else {

    }
  }else{
    window.alert(formVals.lectureName+" already exists, add a Teacher to proceed.");
  }
  }
  }
}
