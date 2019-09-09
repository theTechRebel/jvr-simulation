import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureStudentComponent } from './lecture-student.component';

describe('LectureStudentComponent', () => {
  let component: LectureStudentComponent;
  let fixture: ComponentFixture<LectureStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
