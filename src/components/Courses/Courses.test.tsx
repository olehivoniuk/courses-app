import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'
import Courses from './Courses'
import { userReducer } from 'src/store/user/userSlice'
import { coursesReducer } from 'src/store/courses/coursesSlice'
import { authorsReducer } from 'src/store/authors/authorsSlice'
import { fetchUser } from 'src/store/user/thunk'

jest.mock('src/store/user/thunk', () => ({
  ...jest.requireActual('src/store/user/thunk'),
  fetchUser:
    () =>
    async (
      dispatch: (arg0: {
        type: string
        payload: {
          successful: boolean
          result: {
            isAuth: boolean
            name: string
            email: string
            role: string
            id: string
          }
        }
      }) => void,
    ) => {
      dispatch({
        type: 'users/fetchUser.fulfilled',
        payload: {
          successful: true,
          result: {
            isAuth: true,
            name: 'Test User',
            email: 'test@example.com',
            role: 'admin',
            id: '1',
          },
        },
      })
    },
}))

describe('Courses Component', () => {
  it('should display an amount of CourseCard equal to length of courses array', async () => {
    const store = configureStore({
      reducer: {
        user: userReducer,
        courses: coursesReducer,
        authors: authorsReducer,
      },
      preloadedState: {
        user: {
          isAuth: true,
          name: 'Test User',
          email: 'test@example.com',
          role: 'admin',
          id: '1',
        },
        courses: [
          { id: '1', title: 'Course 1', authors: ['1'] },
          { id: '2', title: 'Course 2', authors: ['1', '2'] },
        ],
        authors: [
          { id: '1', name: 'Author 1' },
          { id: '2', name: 'Author 2' },
        ],
      },
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Courses />
        </MemoryRouter>
      </Provider>,
    )

    await waitFor(async () => {
      const courseCards = await screen.findAllByTestId('courseCard')
      expect(courseCards.length).toBe(store.getState().courses.length)
    })
  })
})
