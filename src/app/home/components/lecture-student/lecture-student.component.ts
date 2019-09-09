import { Component, OnInit, Inject } from '@angular/core';
import { ILecture, IPerson, IStudentLecture } from '../../models/home.model';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute } from '@angular/router';
import { JQ_TOKEN } from 'src/app/common/jQuery.service';

@Component({
  selector: 'app-lecture-student',
  templateUrl: './lecture-student.component.html',
  styleUrls: ['./lecture-student.component.css']
})
export class LectureStudentComponent implements OnInit {

  lectures:ILecture[];
  students:IPerson[]=[];
  existingStudents:IPerson[];
  lectureStudents:IStudentLecture[];
  lecture:number = 0;
  lectureName:ILecture;
  hasTeacherBeenSelected:boolean = false;
  
  constructor(private route:ActivatedRoute, private homeService:HomeService,@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
    if(this.route.snapshot.data['lectures'].result)
      this.lectures = this.route.snapshot.data['lectures'].result.items as ILecture[];
    if(this.route.snapshot.data['students'].result)
      this.existingStudents = this.route.snapshot.data['students'].result.items as IPerson[];

    this.homeService.selectLecture$.subscribe(
      lecture=>{
        this.lecture = lecture;
        this.lectureName = this.lectures.find(obj => {
          return obj.id === lecture
        })

        this.homeService.StudentLectureGetAll(0,10).subscribe(
          data=>{
            this.students = [];
            this.lectureStudents = data.result.items as IStudentLecture[];
            var currentLecture = this.lectureStudents.filter(lectStudent => lectStudent.lectureId == lecture);
            console.log(currentLecture);
            currentLecture.forEach(item => {
              this.students = this.existingStudents.filter(student => student.id === item.studentId);
            });
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

  addStudent(){
    this.$('#adduser-modal').modal({});
  }


  removeStudent(studentID){
    let student:IPerson = this.existingStudents.find(student => student.id === studentID);
    if (confirm( "Are you sure you want to remove "+student.firstName+" "+student.lastName+" from "+this.lectureName.description)) {
      this.homeService.StudentLectureDelete(studentID).subscribe(
        response =>{
          if(response.success){
            let student:IPerson = this.existingStudents.find(student => student.id === studentID);
            window.alert(student.firstName+" "+student.lastName+" has been removed from Lecture.");

            var item = this.students.indexOf(student);
            this.students.splice(item);
            console.log(item);
          }
        }
      )
    } else {

    }
  }

  addThisStudent(id:number){
    var newLectureStudent:IStudentLecture = {
      lectureId: this.lecture,
      studentId:id,
      id:0
    };

    let student:IPerson = this.existingStudents.find(student => student.id === id);
    var item = this.students.indexOf(student);
    console.log(item);

    
    if(item === -1){
    this.homeService.StudentLectureCreate(newLectureStudent).subscribe(
      response=>{
        console.log(response);
        if(response.success){
          window.alert(student.firstName+" "+student.lastName+" has been added to Lecture.");
          this.students.push(student);
        }
      }
    )}else{
      window.alert(student.firstName+" "+student.lastName+" is already enrolled in this lecture");
    }
  }
    

}
