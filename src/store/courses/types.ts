export type CourseType = {
  id?: string
  title?: string
  description?: string
  duration?: number
  creationDate?: string
  authors?: string[]
}

export interface CourseData {
  title: string
  description: string
  duration: number
  authors: string[]
}

export interface UpdateCourseArgs {
  courseId: string
  courseData: CourseType
}

interface ApiResponse<T> {
  successful: boolean
  result: T
}

export interface CourseResponse extends ApiResponse<CourseType> {}
