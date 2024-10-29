export const enum CoursesActionTypes {
  SAVE_COURSES = 'SAVE_COURSES',
  ADD_COURSE = 'ADD_COURSE',
  DELETE_COURSE = 'DELETE_COURSE',
}

export type CourseType = {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

interface SaveCoursesAction {
  type: CoursesActionTypes.SAVE_COURSES
  payload: CourseType[]
}

interface AddCourseAction {
  type: CoursesActionTypes.ADD_COURSE
  payload: CourseType
}

interface DeleteCourseAction {
  type: CoursesActionTypes.DELETE_COURSE
  payload: string
}

export type CoursesAction =
  | SaveCoursesAction
  | AddCourseAction
  | DeleteCourseAction
