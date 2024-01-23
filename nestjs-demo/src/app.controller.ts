import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './app.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}
  // create
  @Post()
  addBooks(): string {
    return this.bookService.addBooks();
  }
  // read
  @Get()
  findAll(): string {
    return this.bookService.findAll();
  }
  // update
  @Put('/update')
  updateBooks(): string {
    return this.bookService.updateBooks();
  }
  // delete
  @Delete('/delete')
  deleteBooks(): string {
    return this.bookService.deleteBooks();
  }
}
