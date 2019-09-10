//represents a Lecture
export interface ILecture{
  description: string,
  teacherId: number,
  id: number
}

//represents a Teacher or Student because they both have the same properties
export interface IPerson{
    firstName: string,
    lastName: string,
    emailAddress: string,
    telephoneNumber: string,
    dateOfBirth: string,
    id: number
}

//represents a Student-Lecture relationship
export interface IStudentLecture{
    lectureId: number,
    studentId: number,
    id: number
}