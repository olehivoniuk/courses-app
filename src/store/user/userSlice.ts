import { createSlice } from '@reduxjs/toolkit'
import { fetchUser, loginUser } from './thunk'
import { UserType } from './types'

const initialState: UserType = {
  isAuth: false,
  name: '',
  email: '',
  role: '',
}
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')
      state.isAuth = false
      state.name = ''
      state.email = ''
      state.role = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload.successful) {
          Object.assign(state, { isAuth: true })
        } else {
          console.log('Fetch user was not successful')
          Object.assign(state, { isAuth: false })
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log('Fetch user failed: ', action.payload)
        Object.assign(state, initialState)
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const token = action.payload.result

        const { email, name } = action.payload.user
        localStorage.setItem('token', token)
        state.isAuth = true
        state.name = name
        state.email = email
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.error('Login failed:', action.payload)
      })
  },
})
export const { logout } = userSlice.actions
export const userReducer = userSlice.reducer
