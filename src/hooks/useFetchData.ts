import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchCourses as fetchCoursesService,
  fetchAuthors as fetchAuthorsService,
} from 'src/services'
import { saveAuthorsAction } from 'src/store/authors/actions'
import { saveCoursesAction } from 'src/store/courses/actions'

export const useFetchData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        const [fetchedCourses, fetchedAuthors] = await Promise.all([
          fetchCoursesService(),
          fetchAuthorsService(),
        ])
        dispatch(saveCoursesAction(fetchedCourses.result))
        dispatch(saveAuthorsAction(fetchedAuthors.result))
      } catch (error) {
        console.error('Failed to load data:', error)
      }
    }

    fetchData()
  }, [dispatch])
}
