import { AuthorsActionTypes, AuthorType, SaveAuthorsAction } from './types'

export const saveAuthorsAction = (
  authors: AuthorType[],
): SaveAuthorsAction => ({
  type: AuthorsActionTypes.SAVE_AUTHORS,
  payload: authors,
})
