import React, { useState } from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'
import { mockedCoursesList } from 'src/constants'
import { formatDuration } from 'src/helpers/getCourseDuration'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchAttempted, setSearchAttempted] = useState(false)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearchClick = () => {
    const searchQuery = inputValue.trim().toLowerCase()
    const foundCourses = mockedCoursesList.filter(
      (course) =>
        course.id.toLowerCase() === searchQuery ||
        course.title.toLowerCase().includes(searchQuery),
    )
    setSearchResults(foundCourses)
    setSearchAttempted(true)
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
          <CustomButton className='add-course-button' variant='contained'>
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
                  <Grid item xs={5}>
                    <Typography variant='body2'>ID: {course.id}</Typography>
                    <Typography variant='body2'>
                      Authors: {course.authors.join(', ')}
                    </Typography>
                    <Typography variant='body2'>
                      Duration: {formatDuration(course.duration)}
                    </Typography>
                    <Typography variant='body2'>
                      Creation Date: {course.creationDate}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))
        ) : searchAttempted ? (
          <Typography>No courses found.</Typography>
        ) : null}
      </Grid>
    </Grid>
  )
}

export default SearchBar
