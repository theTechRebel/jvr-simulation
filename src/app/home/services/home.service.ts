import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, of, Subject } from 'rxjs';
import { ILecture } from '../models/home.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //inject httpclient into the service so we can make http calls
  constructor(private http:HttpClient) { }

  //the base url for all http requests
  BASE_URL = "http://stratisqtest-001-site1.mysitepanel.net/api/services/app/"
  

  //a generic error handler that helps in caching and handling all http errors that may occur 
    //@params operation - specify the method that has thrown error type string
    //@params result? - specify default values to be returned after error type any,nullable
  private handleError<T>(operation='operation', result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      //log out errors here if need be, for now will just log to browser console
      return of(result as T);
    }
  }
  //LectureService/GetAll
  //Retrieves a list of all lectures
    //@params skipcount - specify how many records to skip type integer 
    //@params maxresult - specify how many results to return type integer
  LectureServiceGetAll(skipcount:number,maxresult:number):Observable<any>{
    return this.http.get<any>(this.BASE_URL+"LectureService/GetAll?SkipCount="+skipcount+"&MaxResultCount="+maxresult)
    .pipe(catchError(this.handleError<any>('LectureServiceGetAll',[])))
  }

  //TeacherService/GetAll
  //Retrieves a list of all Teachers
    //@params skipcount - specify how many records to skip type integer 
    //@params maxresult - specify how many results to return type integer
    TeacherServiceGetAll(skipcount:number,maxresult:number):Observable<any>{
      return this.http.get<any>(this.BASE_URL+"TeacherService/GetAll?SkipCount="+skipcount+"&MaxResultCount="+maxresult)
      .pipe(catchError(this.handleError<any>('TeacherServiceGetAll',[])))
    }

    //A subject for info to be passed between Lecture-List Component & Teacher-List Component
    private _selectLecture = new Subject<number>();
    //the Observable to be subscribed to
    selectLecture$ = this._selectLecture.asObservable();
    //Method to send message between Lecture-List & Teacher-List
    // to be subscribed to by TEacher-List
    selectLecture(lecture:number){
      this._selectLecture.next(lecture);
    }
}
