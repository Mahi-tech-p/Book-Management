import { Injectable } from '@angular/core';
import { Book } from '../Models/book';
import { Observable,of,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  addBook(book: Book): Observable<Book>{
    return of(book)
  }
}
