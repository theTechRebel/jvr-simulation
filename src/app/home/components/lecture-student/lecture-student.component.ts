import { Component, OnInit } from '@angular/core';
import { ILecture, IPerson, IStudentLecture } from '../../models/home.model';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lecture-student',
  templateUrl: './lecture-student.component.html',
  styleUrls: ['./lecture-student.component.css']
})
export class LectureStudentComponent implements OnInit {

  lectures:ILecture[];
  students:IPerson[]=[];
  lectureStudents:IStudentLecture[];
  lecture:number = 0;
  lectureName:ILecture;
  hasTeacherBeenSelected:boolean = false;
  
  constructor(private route:ActivatedRoute, private homeService:HomeService) { }

  ngOnInit() {
    this.lectures = this.route.snapshot.data['lectures'].result.items as ILecture[];

    this.homeService.selectLecture$.subscribe(
      lecture=>{
        this.lecture = lecture;
        this.lectureName = this.lectures.find(obj => {
          return obj.id === lecture
        })

        this.homeService.StudentLectureGetAll(0,10).subscribe(
          data=>{
            this.lectureStudents = data.result.items as IStudentLecture[];
            this.lectureStudents.forEach(lectStud => {
              this.homeService.StudentServiceGet(lectStud.studentId).subscribe(
                data=>{
                  this.students.push(data.result as IPerson)
                }
              )
            });
            console.log(this.students);
          }
        )

      }
    )

    this.homeService.selectTeacher$.subscribe(
      teacher=>{
        this.hasTeacherBeenSelected = teacher;
      }
    )
  }

}
