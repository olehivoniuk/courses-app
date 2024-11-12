import { render, screen } from '@testing-library/react'
import CourseCard from './CourseCard'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { formatDuration } from 'src/helpers/getCourseDuration'
import { formatDate } from 'src/helpers/formatCreationDate'
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('src/helpers/getCourseDuration', () => ({
  formatDuration: jest.fn(),
}))

jest.mock('src/helpers/formatCreationDate', () => ({
  formatDate: jest.fn(),
}))

beforeEach(() => {
  ;(formatDuration as jest.Mock).mockReturnValue('2 hours')
  ;(formatDate as jest.Mock).mockReturnValue('January 1, 2021')
})

describe('CourseCard Component', () => {
  const course = {
    title: 'Test Course',
    description: 'Test Description',
    duration: 120,
    creationDate: new Date('2021-01-01'),
    id: '1',
  }
  const authors = ['Author 1', 'Author 2']

  test('CourseCard should display title', () => {
    render(
      <Router>
        <CourseCard
          course={course}
          authors={authors}
          onDelete={() => {}}
          userRole='user'
        />
      </Router>,
    )
    expect(screen.getByText('Test Course')).toBeInTheDocument()
  })

  test('CourseCard should display description', () => {
    render(
      <Router>
        <CourseCard
          course={course}
          authors={authors}
          onDelete={() => {}}
          userRole='user'
        />
      </Router>,
    )
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  test('CourseCard should display duration in the correct format', () => {
    render(
      <Router>
        <CourseCard
          course={course}
          authors={authors}
          onDelete={() => {}}
          userRole='user'
        />
      </Router>,
    )
    expect(screen.getByText('2 hours')).toBeInTheDocument()
  })

  test('CourseCard should display authors list', () => {
    render(
      <Router>
        <CourseCard
          course={course}
          authors={authors}
          onDelete={() => {}}
          userRole='user'
        />
      </Router>,
    )
    expect(screen.getByText('Author 1, Author 2')).toBeInTheDocument()
  })

  test('CourseCard should display created date in the correct format', () => {
    render(
      <Router>
        <CourseCard
          course={course}
          authors={authors}
          onDelete={() => {}}
          userRole='user'
        />
      </Router>,
    )
    expect(screen.getByText('January 1, 2021')).toBeInTheDocument()
  })
})
