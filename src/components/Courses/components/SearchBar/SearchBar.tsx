import React, { useState } from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'
import { formatDuration } from 'src/helpers/getCourseDuration'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CourseInfo from 'src/components/CourseInfo/CourseInfo'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import EmptyCourseList from 'src/components/EmptyCourseList/EmptyCourseList'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchAttempted, setSearchAttempted] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddNewCourse = () => {
    navigate('/courses/add')
  }

  const handleSearchClick = () => {
    const searchQuery = inputValue.trim().toLowerCase()
    if (searchQuery === '') {
      setSearchResults([])
      setSearchAttempted(true)
      setSelectedCourse(null)
      return
    }

    const storedCourses = JSON.parse(localStorage.getItem('courses')) || []
    const foundCourses = storedCourses.filter(
      (course) =>
        course.id.toString().toLowerCase() === searchQuery ||
        course.title.toLowerCase().includes(searchQuery),
    )
    setSearchResults(foundCourses)
    setSearchAttempted(true)
    setSelectedCourse(null)
  }

  const handleShowCourse = (course) => {
    setSelectedCourse(course)
  }

  const handleBack = () => {
    setSelectedCourse(null)
  }

  return (
    <Grid container display='flex' gap={2}>
      <Grid container display='flex' gap={2} justifyContent='space-between'>
        <Grid display='flex' gap={2} justifyContent='space-between'>
          <CustomInput
            placeholder='Enter course title or ID'
            variant='outlined'
            value={inputValue}
            onChange={handleInputChange}
          />
          <CustomButton variant='contained' onClick={handleSearchClick}>
            Search
          </CustomButton>
        </Grid>
        <Grid>
          <CustomButton
            onClick={handleAddNewCourse}
            className='add-course-button'
            variant='contained'
          >
            Add new course
          </CustomButton>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        container
        display='flex'
        flexDirection='column'
        gap={4}
      >
        {searchResults.length > 0 ? (
          searchResults.map((course) => (
            <Card key={course.id}>
              <CardContent>
                <Typography variant='h5' component='div'>
                  {course.title}
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={7}>
                    <Typography variant='body2' color='text.secondary'>
                      {course.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={5} gap={4}>
                    <Grid display='flex' flexDirection='column' gap={3}>
                      <Grid>
                        <Typography variant='body2'>ID: {course.id}</Typography>
                        <Typography variant='body2'>Authors:</Typography>
                        <Typography variant='body2'>
                          Duration: {formatDuration(course.duration)}
                        </Typography>
                        <Typography variant='body2'>
                          Creation Date: {course.creationDate}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Grid display='flex' flexDirection='row' gap={2}>
                          <CustomButton
                            onClick={() => handleShowCourse(course)}
                            className={undefined}
                            variant='contained'
                          >
                            <Link to={`/courses/${course.id}`}>
                              SHOW COURSE
                            </Link>
                          </CustomButton>
                          <CustomButton
                            onClick={undefined}
                            className={undefined}
                            variant='contained'
                          >
                            <DeleteIcon />
                          </CustomButton>
                          <CustomButton
                            onClick={undefined}
                            className={undefined}
                            variant='contained'
                          >
                            <EditIcon />
                          </CustomButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))
        ) : searchAttempted ? (
          <EmptyCourseList />
        ) : null}
        {selectedCourse && (
          <CourseInfo course={selectedCourse} onBack={handleBack} />
        )}
      </Grid>
    </Grid>
  )
}

export default SearchBar
