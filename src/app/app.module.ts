import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { HomeComponent } from './home/home.component';
import { ListLecturesComponent } from './home/components/list-lectures/list-lectures.component';
import { SelectTeacherComponent } from './home/components/select-teacher/select-teacher.component';
import { LectureStudentComponent } from './home/components/lecture-student/lecture-student.component';
import { UserListModalComponent } from './common/userlist-modal.component';
import {JQ_TOKEN} from './common/jQuery.service';
import {ModalTriggerDirective} from './common/modal-trigger.directive';

let jQuery = window['$'];
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,  BrowserAnimationsModule ],
  declarations: [ AppComponent,  HeaderComponent, FooterComponent, HomeComponent, ListLecturesComponent, SelectTeacherComponent, LectureStudentComponent,UserListModalComponent,ModalTriggerDirective ],
  bootstrap:    [ AppComponent ],
  providers: [{provide:JQ_TOKEN,useValue: jQuery}]
})
export class AppModule { }
 