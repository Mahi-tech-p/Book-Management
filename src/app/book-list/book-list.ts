import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { Book } from '../Models/book';
import { AddBook,RemoveBook} from '../books/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {

  books$: Observable<Book[]>
  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({id,title,author}))
  }
  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({bookId}))
  }
}
