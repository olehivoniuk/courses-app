import { Grid, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import React from 'react'
import CustomButton from 'src/common/Button/Button'

const AuthorItem = ({ authors, removeAuthor }) => {
  return (
    <div>
      {authors.map((author) => (
        <Grid key={author.id} display='flex' alignItems='center'>
          <Typography variant='body1'>{author.name}&nbsp;&nbsp;+</Typography>
          <CustomButton onClick={() => removeAuthor(author.id)}>
            <DeleteOutlineIcon />
          </CustomButton>
        </Grid>
      ))}
    </div>
  )
}
export default AuthorItem
