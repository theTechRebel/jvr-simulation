import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { ILecture, IStudentLecture, IPerson } from '../models/home.model';
import { Observable, of, Subject } from 'rxjs';

describe('HomeService', () => {
  let homeService: HomeService,
  mockHttp,
  BASE_URL = "http://stratisqtest-001-site1.mysitepanel.net/api/services/app/"

  beforeEach(() => {
    homeService = new HomeService(mockHttp);
    mockHttp = jasmine.createSpyObj('mockHttp',['delete','post','put','get']);
  TestBed.configureTestingModule({})
  }
  );

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });

  describe('LectureServiceCreate',()=>{
    it('should send POST request with correct URL & Parameters',()=>{
      var lecture: ILecture = {description:"english",teacherId:3,id:0};
      mockHttp.post.and.returnValue(of(true));
      homeService.LectureServiceCreate(lecture);
      expect(mockHttp.post).toHaveBeenCalledWith(BASE_URL+'/LectureService/Create',lecture);
    })
  })

  describe('LectureServiceGetAll',()=>{
    it('should send GET request with correct URL & Parameters',()=>{
      var skipcount = 0,maxresult=10;
      mockHttp.get.and.returnValue(of(true));
      homeService.LectureServiceGetAll(skipcount,maxresult);
      expect(mockHttp.get).toHaveBeenCalledWith(BASE_URL+"/TeacherService/GetAll?SkipCount="+skipcount+"&MaxResultCount="+maxresult);
    })
  })

  
});