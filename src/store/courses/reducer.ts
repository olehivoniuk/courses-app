// import { CoursesAction, CoursesActionTypes, CourseType } from './types'

// const initCoursesState: CourseType[] = []

// export function coursesReducer(
//   state = initCoursesState,
//   action: CoursesAction,
// ): CourseType[] {
//   switch (action.type) {
//     case CoursesActionTypes.SAVE_COURSES:
//       return action.payload
//     case CoursesActionTypes.ADD_COURSE:
//       return [...state, action.payload]
//     case CoursesActionTypes.DELETE_COURSE:
//       return state.filter((course) => course.id !== action.payload)
//     case CoursesActionTypes.SAVE_COURSE:
//       const index = state.findIndex((course) => course.id === action.payload.id)
//       if (index !== -1) {
//         return state.map((course) =>
//           course.id === action.payload.id ? action.payload : course,
//         )
//       } else {
//         return [...state, action.payload]
//       }
//     default:
//       return state
//   }
// }
