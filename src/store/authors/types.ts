export const enum AuthorsActionTypes {
  SAVE_AUTHORS = 'SAVE_AUTHORS',
  ADD_AUTHORS = 'ADD_AUTHORS',
  DELETE_AUTHORS = 'DELETE_AUTHORS',
}

export type AuthorType = {
  id: string
  name: string
}

export type SaveAuthorsAction = {
  type: AuthorsActionTypes.SAVE_AUTHORS
  payload: AuthorType[]
}

export type AuthorsAction = SaveAuthorsAction
