import React from 'react'
import { useState } from 'react'
import './CreateCourse.scss'
import { Grid, TextField, Typography } from '@mui/material'
import CustomInput from 'src/common/Input/Input'
import CustomButton from 'src/common/Button/Button'
import { formatDuration } from 'src/helpers/getCourseDuration'
import AuthorItem from './components/AuthorItem/AuthorItem'

const CreateCourse = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const [authorName, setAuthourName] = useState('')
  const [authors, setAuthors] = useState([])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleDurationChange = (e) => {
    setDuration(e.target.value)
  }

  const hanldeAuthourNameChange = (e) => {
    setAuthourName(e.target.value)
  }

  const addAuthorName = () => {
    const newAuthor = {
      id: new Date().getTime(), // Using the current timestamp as an ID
      name: authorName,
    }
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor])
    setAuthourName('')
  }

  const removeAuthor = (id) => {
    setAuthors((prevAuthors) =>
      prevAuthors.filter((author) => author.id !== id),
    )
  }

  return (
    <Grid
      display='flex'
      alignItems='center'
      justifyContent='start'
      flexDirection='column'
      gap={2}
    >
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
            className='title-input'
          />
          <TextField
            value={description}
            onChange={handleDescriptionChange}
            label='Description'
            multiline
            rows={4}
            placeholder='input text'
            variant='outlined'
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
                  className='duration-input'
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
              {authors.length > 0 ? (
                authors.map((author, index) => (
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

          <AuthorItem authors={authors} removeAuthor={removeAuthor} />
        </Grid>
        <Grid
          display='flex'
          flexDirection='row'
          gap={2}
          justifyContent='flex-end'
        >
          <CustomButton variant='contained'>Cancel</CustomButton>
          <CustomButton variant='contained'>Create course</CustomButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreateCourse
