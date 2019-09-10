import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { HomeComponent } from './home/home.component';
import {Error404Component} from './common/404.component';
import { ListLecturesComponent } from './home/components/list-lectures/list-lectures.component';
import { SelectTeacherComponent } from './home/components/select-teacher/select-teacher.component';
import { LectureStudentComponent } from './home/components/lecture-student/lecture-student.component';
import { UserListModalComponent } from './common/userlist-modal.component';
import {AddUserModalComponent} from './common/adduser-modal.component';
import {JQ_TOKEN} from './common/jQuery.service';
import {ModalTriggerDirective} from './common/modal-trigger.directive';
import { TeachersComponent } from './teachers/teachers.component';

let jQuery = window['$'];
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,  BrowserAnimationsModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,  HeaderComponent, FooterComponent, HomeComponent, ListLecturesComponent, SelectTeacherComponent, LectureStudentComponent,UserListModalComponent,ModalTriggerDirective,AddUserModalComponent, TeachersComponent,Error404Component ],
  bootstrap:    [ AppComponent ],
  providers: [{provide:JQ_TOKEN,useValue: jQuery}]
})
export class AppModule { }
 