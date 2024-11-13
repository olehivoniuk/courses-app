export enum UserActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  REMOVE_USER = 'REMOVE_USER',
}

export type UserType = {
  isAuth: boolean
  name: string
  email: string
  token?: string
  role: string
  id?: string | null
}
