import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  addBooks(): string {
    return 'Book Added';
  }
  findAll(): string {
    return 'All Books';
  }
  updateBooks(): string {
    return 'Book Updated';
  }
  deleteBooks(): string {
    return 'Book Deleted';
  }
}
