// import { UserActionTypes, UserType } from './types'

// const getTokenFromStorage = () => localStorage.getItem('token') || ''

// const userInitialState: UserType = {
//   isAuth: false,
//   name: '',
//   email: '',
//   token: getTokenFromStorage(),
//   role: '',
// }

// export const userReducer = (
//   state = userInitialState,
//   action: any,
// ): UserType => {
//   switch (action.type) {
//     case UserActionTypes.LOGIN_SUCCESS:
//       return {
//         ...state,
//         isAuth: true,
//         name: action.payload.name,
//         email: action.payload.email,
//         token: action.payload.token,
//       }
//     case UserActionTypes.REMOVE_USER:
//       localStorage.removeItem('token')
//       return {
//         ...state,
//         isAuth: false,
//         name: '',
//         email: '',
//         token: '',
//       }
//     default:
//       return state
//   }
// }
