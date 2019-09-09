import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//resolver class 
//helps with pre-fecting data for the HomeComponent so it never loads with empty data
export class StudentsResolverService {
//inject the HomeService so it can be used by the resolver
constructor(private homeService:HomeService) { }
//resolve method is responsible for fetching the first 10 records before the UI loads
resolve() {
  return this.homeService.StudentServiceGetAll(0,10)
  .pipe(map(lectures=>lectures))
 }
}
