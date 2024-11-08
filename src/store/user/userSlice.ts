import { createSlice } from '@reduxjs/toolkit'
import { fetchUser, loginUser } from './thunk'
import { UserType } from './types'

const initialState: UserType = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
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
      state.token = ''
      state.role = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload.successful) {
          // Destructure to exclude the password field from the user data
          const { password, ...userWithoutPassword } = action.payload.result

          // Use the rest of the properties to update the state, ensuring to exclude the password
          Object.assign(state, userWithoutPassword, { isAuth: true })
        } else {
          console.log('Fetch user was not successful')
          Object.assign(state, { isAuth: false })
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        // Handle the rejected case
        console.log('Fetch user failed: ', action.payload)
        // Reset the state or update it to reflect that fetching user failed
        Object.assign(state, initialState)
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // Assuming "action.payload.result" directly contains the token string based on your response example.
        const token = action.payload.result

        // Extracting "user" object directly from "action.payload" based on your response example.
        const { email, name } = action.payload.user
        localStorage.setItem('token', token)

        // Updating state
        state.isAuth = true
        state.name = name
        state.email = email
        state.token = token
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.error('Login failed:', action.payload)
      })
  },
})
export const { logout } = userSlice.actions
export const userReducer = userSlice.reducer
