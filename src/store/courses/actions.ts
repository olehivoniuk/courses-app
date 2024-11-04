import {
  AddNewCourseAction,
  CoursesActionTypes,
  CourseType,
  DeleteCourseAction,
  SaveCoursesAction,
} from './types'

export const addNewCourseAction = (
  courseData: CourseType,
): AddNewCourseAction => ({
  type: CoursesActionTypes.ADD_COURSE,
  payload: courseData,
})

export const saveCoursesAction = (
  courses: CourseType[],
): SaveCoursesAction => ({
  type: CoursesActionTypes.SAVE_COURSES,
  payload: courses,
})

export const deleteCourseAction = (courseId: string): DeleteCourseAction => ({
  type: CoursesActionTypes.DELETE_COURSE,
  payload: courseId,
})
