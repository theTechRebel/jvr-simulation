import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home/services/home.service';
import { IPerson } from '../home/models/home.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JQ_TOKEN } from '../common/jQuery.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  currentTeacher:IPerson;
  teacherForm:FormGroup;
  teachers:IPerson[]=[];

  firstName = new FormControl(Validators.required);
  lastName = new FormControl(Validators.required);
  emailAddress = new FormControl(Validators.required);
  telephoneNumber = new FormControl(Validators.required);
  dateOfBirth = new FormControl(Validators.required);

  constructor(private route: ActivatedRoute,private router: Router,private homeService:HomeService,@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
    if(this.teachers = this.route.snapshot.data['teachers'].result)
      this.teachers = this.route.snapshot.data['teachers'].result.items as IPerson[];

      this.teacherForm = new FormGroup({
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
    if(this.teacherForm.valid){
      if(teacherForm.id === 0){

      }else{

      }
    }
  }

  edit(id:number){
    var teacher = this.teachers.filter(teachObj=>teachObj.id === id);
    this.currentTeacher = teacher[0];
    this.firstName.setValue(this.currentTeacher.firstName);
    this.lastName.setValue(this.currentTeacher.lastName);
    this.emailAddress.setValue(this.currentTeacher.emailAddress);
    this.telephoneNumber.setValue(this.currentTeacher.telephoneNumber);
    this.dateOfBirth.setValue(this.currentTeacher.dateOfBirth);
    this.$('#userlist-modal').modal({});
  }

  private clearValues(){
    this.firstName.setValue("");
    this.lastName.setValue("");
    this.emailAddress.setValue("");
    this.telephoneNumber.setValue("");
    this.dateOfBirth.setValue("");
  }

}
