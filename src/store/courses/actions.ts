import { CoursesActionTypes, CourseType } from './types'

type AddNewCourseAction = {
  type: CoursesActionTypes.ADD_COURSE
  payload: CourseType
}

export const addNewCourseAction = (
  courseData: CourseType,
): AddNewCourseAction => ({
  type: CoursesActionTypes.ADD_COURSE,
  payload: courseData,
})

type SaveCoursesAction = {
  type: CoursesActionTypes.SAVE_COURSES
  payload: CourseType[]
}

export const saveCoursesAction = (
  courses: CourseType[],
): SaveCoursesAction => ({
  type: CoursesActionTypes.SAVE_COURSES,
  payload: courses,
})

type DeleteCourseAction = {
  type: CoursesActionTypes.DELETE_COURSE
  payload: string
}

export const deleteCourseAction = (courseId: string): DeleteCourseAction => ({
  type: CoursesActionTypes.DELETE_COURSE,
  payload: courseId,
})
