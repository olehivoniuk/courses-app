export enum UserActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  REMOVE_USER = 'REMOVE_USER',
}

export type UserState = {
  isAuth: boolean
  name: string
  email: string
  token: string
}
