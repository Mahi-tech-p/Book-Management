import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  RemoveBook,
  AddBookFailure,
  AddBookSuccess,
} from './book.actions';
import { Book } from '../Models/book';
import { startWith } from 'rxjs';

export const initialState: Array<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(AddBook, (state) => {
    return state;
  }),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailure, (state, { error }) => {
    console.error(error);
    return state;
  }),
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id != bookId)
  )
);
