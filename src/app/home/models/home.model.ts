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
    dateOfBirth: Date,
    id: number
}