// export const fetchCoursesService = async () => {
//   try {
//     const response = await fetch('http://localhost:4000/courses/all')
//     if (!response.ok) throw new Error('Network response was not ok')
//     const courses = await response.json()
//     return courses
//   } catch (error) {
//     console.error('Error fetching the courses:', error)
//     throw error
//   }
// }

// export const fetchAuthorsService = async () => {
//   try {
//     const response = await fetch('http://localhost:4000/authors/all')
//     if (!response.ok) throw new Error('Network response was not ok')
//     const authors = await response.json()
//     return authors
//   } catch (error) {
//     console.log('Error fetching authors:', error)
//     throw error
//   }
// }

// export const fetchCourseById = async (courseId: string) => {
//   try {
//     const response = await fetch(`http://localhost:4000/courses/${courseId}`)
//     if (!response.ok) throw new Error('Network response was not ok')
//     const course = await response.json()
//     return course
//   } catch (error) {
//     console.error('Error fetching the course:', error)
//     throw error
//   }
// }
