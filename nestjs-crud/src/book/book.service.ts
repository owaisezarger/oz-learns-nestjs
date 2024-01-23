import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'book added successfully';
  }

  //update book
  updateBookService(book: Book): string {
    let index = this.books.findIndex((newBook) => {
      return newBook.id === book.id;
    });
    this.books[index] = book;
    return 'book updated successfully';
  }

  //delete book
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => book.id !== bookId);
    return 'book deleted successfully';
  }

  //find all books
  findAllBooksService(): Book[] {
    return this.books;
  }
}
