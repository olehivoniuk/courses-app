// reducer.ts

import { UserActionTypes, UserState } from './types'

const getTokenFromStorage = () => localStorage.getItem('token') || ''

const userInitialState: UserState = {
  isAuth: false,
  name: '',
  email: '',
  token: getTokenFromStorage(),
}

export const userReducer = (
  state = userInitialState,
  action: any,
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      }
    case UserActionTypes.REMOVE_USER:
      // Optionally, clear the token from localStorage on logout
      localStorage.removeItem('token')
      return {
        ...state,
        isAuth: false,
        name: '',
        email: '',
        token: '',
      }
    default:
      return state
  }
}
