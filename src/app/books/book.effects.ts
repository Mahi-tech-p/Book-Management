import { Injectable } from '@angular/core';
import { Book } from '../Models/book';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from './bookService';
import { mergeMap, map, catchError, of } from 'rxjs';
@Injectable()
export class BookEffects {
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.AddBook),
      mergeMap((action) =>
        this.bookService.addBook(action.book).pipe(
          map((book) => bookActions.AddBookSuccess(book)),
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private bookService: BookService) {}
}
