import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { useAppSelector } from 'src/hooks/useAppDispatch'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: () => ({ pathname: '/' }),
}))

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}))

jest.mock('src/common/Button/CustomButton', () => () => <div>LOGOUT</div>)
jest.mock('src/hooks/useAppDispatch', () => ({
  useAppSelector: jest.fn(),
}))
;(useAppSelector as jest.Mock).mockImplementation((selector) =>
  selector({ user: { name: 'John Doe' } }),
)

describe('Header Component', () => {
  beforeEach(() => {
    ;(useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({ user: { name: 'John Doe' } }),
    )
  })

  test('should display logo and user’s name when logged in', () => {
    localStorage.setItem('token', 'mockToken')
    render(<Header />)

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    expect(screen.getByText(/LOGOUT/i)).toBeInTheDocument()

    localStorage.removeItem('token')
  })

  test('should not display button and not display user’s name when not logged in', () => {
    localStorage.removeItem('token')
    render(<Header />)

    expect(screen.queryByText(/John Doe/i)).toBeNull()
    expect(screen.queryByText(/LOGOUT/i)).toBeNull()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
