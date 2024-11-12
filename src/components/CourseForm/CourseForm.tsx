import React, { useEffect } from 'react'
import { useState } from 'react'
import './CourseForm.scss'
import { Grid, TextField, Typography } from '@mui/material'
import CustomInput from 'src/common/Input/Input'
import CustomButton from 'src/common/Button/Button'
import { formatDuration } from 'src/helpers/getCourseDuration'
import AuthorItem from './components/AuthorItem/AuthorItem'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCourseById, fetchCoursesAdd } from 'src/store/courses/thunk'
import { useAppDispatch, useAppSelector } from 'src/hooks/useAppDispatch'
import { fetchAuthors, fetchPostAuthors } from 'src/store/authors/thunk'

const CourseForm = () => {
  const [title, setTitle] = useState('')
  const [isTitleValid, setIsTitleValid] = useState(true)
  const [titleHelperText, setTitleHelperText] = useState('')

  const [description, setDescription] = useState('')
  const [isDescriptionValid, setIsDescriptionValid] = useState(true)
  const [descriptionHelperText, setDescriptionHelperText] = useState('')

  const [duration, setDuration] = useState('')
  const [isDurationValid, setIsDurationValid] = useState(true)
  const [durationHelperText, setDurationHelperText] = useState('')
  const [newlyCreatedAuthors, setNewlyCreatedAuthors] = useState([])

  const [authorName, setAuthourName] = useState('')
  const [combinedAuthors, setCombinedAuthors] = useState([])

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { courseId } = useParams()
  const course = useAppSelector((state) =>
    state.courses.find((c) => c.id === courseId),
  )
  const authors = useAppSelector((state) => state.authors)

  useEffect(() => {
    if (!authors.length) dispatch(fetchAuthors())
    if (courseId) dispatch(fetchCourseById(courseId))
  }, [dispatch, courseId, authors.length])

  useEffect(() => {
    if (course) {
      setTitle(course.title)
      setDescription(course.description)
      setDuration(course.duration.toString())
      setCombinedAuthors([
        ...course.authors.map((authorId) =>
          authors.find((a) => a.id === authorId),
        ),
        ...newlyCreatedAuthors,
      ])
    }
  }, [course, newlyCreatedAuthors, authors])

  const validateTitle = (title) => {
    if (!title.trim()) {
      setIsTitleValid(false)
      setTitleHelperText('Title cannot be empty')
      return false
    }
    setIsTitleValid(true)
    setTitleHelperText('')
    return true
  }

  const validateDescription = (description) => {
    if (!description.trim() || description.length < 20) {
      setIsDescriptionValid(false)
      setDescriptionHelperText(
        'Description must be at least 20 characters long',
      )
      return false
    }
    setIsDescriptionValid(true)
    setDescriptionHelperText('')
    return true
  }

  const validateDuration = (duration) => {
    if (!duration.trim() || isNaN(duration) || parseInt(duration) < 0) {
      setIsDurationValid(false)
      setDurationHelperText('Duration must be a positive number')
      return false
    }
    setIsDurationValid(true)
    setDurationHelperText('')
    return true
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    validateTitle(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    validateDescription(e.target.value)
  }

  const handleDurationChange = (e) => {
    const value = e.target.value
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setDuration(value)
      validateDuration(value)
    }
  }

  const hanldeAuthourNameChange = (e) => {
    setAuthourName(e.target.value)
  }

  const handleCancel = () => {
    navigate('/courses')
  }

  const addAuthorName = async (event) => {
    event.preventDefault()
    if (authorName.trim()) {
      try {
        const newAuthor = await dispatch(fetchPostAuthors(authorName)).unwrap()
        setNewlyCreatedAuthors((prev) => [...prev, newAuthor])
        setCombinedAuthors((prev) => [...prev, newAuthor]) // Also update combined authors

        setAuthourName('')
      } catch (error) {
        console.error('Error adding the author:', error)
      }
    } else {
      console.log("Author name can't be empty.")
    }
  }

  const removeAuthor = (id) => {
    setNewlyCreatedAuthors((prev) => prev.filter((author) => author.id !== id))
    setCombinedAuthors((prev) => prev.filter((author) => author.id !== id))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const isTitleValid = validateTitle(title)
    const isDescriptionValid = validateDescription(description)
    const isDurationValid = validateDuration(duration)

    if (!isTitleValid || !isDescriptionValid || !isDurationValid) {
      return
    }

    const courseData = {
      title,
      description,
      duration: parseInt(duration),
      authors: newlyCreatedAuthors.map((author) => author.id),
    }

    try {
      const response = await dispatch(fetchCoursesAdd(courseData))
      if (fetchCoursesAdd.fulfilled.match(response)) {
        console.log('Course saved successfully:', response.payload)
        resetFormFields()
        navigate('/courses')
      } else {
        throw new Error('Failed to save course')
      }
    } catch (error) {
      console.error('Failed to save course:', error)
    }
  }

  const resetFormFields = () => {
    setTitle('')
    setDescription('')
    setDuration('')
    setAuthourName('')
    setIsTitleValid(true)
    setTitleHelperText('')
    setIsDescriptionValid(true)
    setDescriptionHelperText('')
    setIsDurationValid(true)
    setDurationHelperText('')
  }

  return (
    <Grid
      display='flex'
      alignItems='center'
      justifyContent='start'
      flexDirection='column'
      gap={2}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          display='flex'
          justifyContent='start'
          flexDirection='column'
          gap={2}
        >
          <Typography variant='h4'>Course Edit / Create Page</Typography>
          <Grid
            className='add-new-course-container'
            display='flex'
            flexDirection='column'
            gap={2}
          >
            <Typography variant='h6'>Main Info</Typography>
            <CustomInput
              value={title}
              onChange={handleTitleChange}
              label='title'
              className={`title-input ${!isTitleValid ? 'input-error' : ''}`}
              error={!isTitleValid}
              helperText={titleHelperText}
            />
            <TextField
              value={description}
              onChange={handleDescriptionChange}
              label='Description'
              multiline
              rows={4}
              placeholder='input text'
              variant='outlined'
              error={!isDescriptionValid}
              helperText={descriptionHelperText}
              fullWidth
            />
            <Grid
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              gap={2}
            >
              <Grid display='flex' flexDirection='column' gap={2}>
                <Typography variant='h6'>Duration</Typography>
                <Grid display='flex' gap={2} alignItems='center'>
                  <CustomInput
                    value={duration}
                    onChange={handleDurationChange}
                    label='Duration'
                    className={`duration-input ${!isDurationValid ? 'input-error' : ''}`}
                    error={!isDurationValid}
                    helperText={durationHelperText}
                  />
                  <Typography variant='body1'>
                    {' '}
                    {duration ? formatDuration(parseInt(duration)) : ''}
                  </Typography>
                </Grid>
                <Typography variant='h6'>Authors</Typography>
                <Grid display='flex' gap={2}>
                  <CustomInput
                    value={authorName}
                    onChange={hanldeAuthourNameChange}
                    label='Author name'
                    className='author-name-input'
                  />
                  <CustomButton onClick={addAuthorName} variant='contained'>
                    Create author
                  </CustomButton>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant='h6'>Course Authors</Typography>
                {combinedAuthors.length > 0 ? (
                  combinedAuthors.map((author, index) => (
                    <Typography key={index} variant='body1'>
                      {author.name}
                    </Typography>
                  ))
                ) : (
                  <Typography variant='body1'>Author list is empty</Typography>
                )}
              </Grid>
            </Grid>
            <Typography variant='h6'>Authors list</Typography>

            <AuthorItem authors={combinedAuthors} removeAuthor={removeAuthor} />
          </Grid>
          <Grid
            display='flex'
            flexDirection='row'
            gap={2}
            justifyContent='flex-end'
          >
            <CustomButton onClick={handleCancel} variant='contained'>
              Cancel
            </CustomButton>
            <CustomButton type='submit' variant='contained'>
              Create course
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

export default CourseForm
