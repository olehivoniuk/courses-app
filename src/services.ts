export const fetchCourses = async () => {
  try {
    const response = await fetch('http://localhost:4000/courses/all')
    if (!response.ok) throw new Error('Network response was not ok')
    const courses = await response.json()
    return courses
  } catch (error) {
    console.error('Error fetching the courses:', error)
    throw error
  }
}

export const fetchAuthors = async () => {
  try {
    const response = await fetch('http://localhost:4000/authors/all')
    if (!response.ok) throw new Error('Network response was not ok')
    const authors = await response.json()
    return authors
  } catch (error) {
    console.log('Error fetching authors:', error)
    throw error
  }
}
