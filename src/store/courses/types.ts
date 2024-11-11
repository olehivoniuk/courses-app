export type CourseType = {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

export interface CourseData {
  title: string
  description: string
  duration: number
  authors: string[]
}

interface ApiResponse<T> {
  successful: boolean
  result: T
}

export interface CourseResponse extends ApiResponse<CourseType> {}
