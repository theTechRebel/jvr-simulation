import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home/services/home.service';
import { IPerson } from '../home/models/home.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JQ_TOKEN } from '../common/jQuery.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  currentTeacher:IPerson = {firstName:'',lastName:'',emailAddress:'',telephoneNumber:'',dateOfBirth:'',id:0};
  teacherForm:FormGroup;
  teachers:IPerson[]=[];

  firstName = new FormControl(this.currentTeacher.firstName,[Validators.required,Validators.pattern('[A-Za-z].*')]);
  lastName = new FormControl(this.currentTeacher.lastName,[Validators.required,Validators.pattern('[A-Za-z].*')]);
  emailAddress = new FormControl(this.currentTeacher.emailAddress,[Validators.required,Validators.email]);
  telephoneNumber = new FormControl(this.currentTeacher.telephoneNumber,[Validators.required,Validators.pattern('[0-9].*')]);
  dateOfBirth = new FormControl(this.currentTeacher.dateOfBirth,Validators.required);
  id = new FormControl(this.currentTeacher.id,Validators.required);

  constructor(private route: ActivatedRoute,private router: Router,private homeService:HomeService,@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
    if(this.teachers = this.route.snapshot.data['teachers'].result)
      this.teachers = this.route.snapshot.data['teachers'].result.items as IPerson[];

      this.teacherForm = new FormGroup({
        id:this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        telephoneNumber: this.telephoneNumber,
        dateOfBirth: this.dateOfBirth
      })
  }

  add(){
    this.clearValues();
  }
  cancel(){
    this.clearValues();
  }

  save(teacherForm:IPerson){
    console.log(teacherForm);
    if(this.teacherForm.valid){
      if(teacherForm.id === 0){
        //this is a new teacher
        this.homeService.TeacherServiceCreate(teacherForm).subscribe(
          response=>{
            if(response.result){
              window.alert(teacherForm.firstName+" "+teacherForm.lastName+" has been created.");
              this.$('#userlist-modal').modal('toggle');
              teacherForm = response.result as IPerson;
              this.teachers.push(teacherForm);
            }else{
              window.alert("Failed to create "+teacherForm.firstName+" "+teacherForm.lastName+" please try again.");
            }
          }
        )
      }else{
        //this is an existing teacher
        this.homeService.TeacherServiceUpdate(teacherForm).subscribe(
          response=>{
            if(response.result){
              window.alert(teacherForm.firstName+" "+teacherForm.lastName+" has been updated.");
              this.$('#userlist-modal').modal('toggle');
              var teacherPosition = this.teachers.findIndex(teach=>teach.id === teacherForm.id);
              this.teachers[teacherPosition] = teacherForm;
            }else{
              window.alert("Failed to update "+teacherForm.firstName+" "+teacherForm.lastName+" please try again.");
            }
          }
        )
      }
    }
  }

  edit(id:number){
    this.currentTeacher = this.teachers.find(teachObj=>teachObj.id === id);
    this.firstName.setValue(this.currentTeacher.firstName);
    this.lastName.setValue(this.currentTeacher.lastName);
    this.emailAddress.setValue(this.currentTeacher.emailAddress);
    this.telephoneNumber.setValue(this.currentTeacher.telephoneNumber);
    let dp = new DatePipe(navigator.language);
    let p = 'y-MM-dd'; // YYYY-MM-DD
    let dtr = dp.transform(new Date(this.currentTeacher.dateOfBirth), p);
    this.dateOfBirth.setValue(dtr);
    this.id.setValue(id);
    this.$('#userlist-modal').modal({});
  }

  delete(id:number){
    this.currentTeacher = this.teachers.find(teachObj=>teachObj.id === id);
    if (confirm( "Are you sure you want to remove "+this.currentTeacher.firstName+" "+this.currentTeacher.lastName+"?")) {
      this.homeService.TeacherServiceDelete(this.currentTeacher.id).subscribe(
        response =>{
          if(response.success){
            let teacher:IPerson = this.teachers.find(teacher => teacher.id === id);
            window.alert(teacher.firstName+" "+teacher.lastName+" has been removed from Teachers.");
            let index = this.teachers.indexOf(teacher);
            this.teachers.splice(index,1);
          }else{
            let teacher:IPerson = this.teachers.find(teacher => teacher.id === id);
            window.alert("Failed to remove "+teacher.firstName+" "+teacher.lastName+" from Teachers.");
          }
        }
      )
    } else {

    }
  }

  private clearValues(){
    this.firstName.setValue("");
    this.lastName.setValue("");
    this.emailAddress.setValue("");
    this.telephoneNumber.setValue("");
    this.dateOfBirth.setValue("");
    this.id.setValue(0);
  }

  validateFirstName(){
    return this.firstName.valid;
  }

  validateLastName(){
    return this.lastName.valid;
  }

  validateEmail(){
    return this.emailAddress.valid;
  }

  validateTelephone(){
    return this.telephoneNumber.valid;
  }

  validateDateOfBirth(){
    return this.dateOfBirth.valid;
  }

}
