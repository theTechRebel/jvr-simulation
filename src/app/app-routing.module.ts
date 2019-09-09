import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LecturesResolverService } from './home/services/lectures-resolver.service';
import { TeachersResolverService } from './home/services/teachers-resolver.service';
import { StudentsResolverService } from './home/services/students-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {lectures: LecturesResolverService,teachers: TeachersResolverService,students: StudentsResolverService}},
  {path: '', redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
