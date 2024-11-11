// export const enum CoursesActionTypes {
//   SAVE_COURSES = 'SAVE_COURSES',
//   ADD_COURSE = 'ADD_COURSE',
//   DELETE_COURSE = 'DELETE_COURSE',
//   SAVE_COURSE = 'SAVE_COURSE',
// }

export type CourseType = {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

// export type SaveCoursesAction = {
//   type: CoursesActionTypes.SAVE_COURSES
//   payload: CourseType[]
// }

// export type SaveCourseAction = {
//   type: CoursesActionTypes.SAVE_COURSE
//   payload: CourseType
// }

// export type AddNewCourseAction = {
//   type: CoursesActionTypes.ADD_COURSE
//   payload: CourseType
// }

// export type DeleteCourseAction = {
//   type: CoursesActionTypes.DELETE_COURSE
//   payload: string
// }

// export type CoursesAction =
//   | SaveCoursesAction
//   | AddNewCourseAction
//   | DeleteCourseAction
//   | SaveCourseAction
