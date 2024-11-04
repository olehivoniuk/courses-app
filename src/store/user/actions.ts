import { UserActionTypes } from './types'

export const loginSuccess = (name: string, email: string, token: string) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: { name, email, token },
})

export const removeUser = () => ({
  type: UserActionTypes.REMOVE_USER,
})
