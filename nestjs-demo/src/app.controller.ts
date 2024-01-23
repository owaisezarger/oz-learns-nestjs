import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('books')
export class BookController {
  // create
  @Post()
  addbooks(): string {
    return 'Book Added';
  }
  // read
  @Get()
  findAll(): string {
    return 'All Books';
  }
  //only one
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  // update
  @Put('/update')
  updateBooks(): string {
    return 'Book Updated';
  }
  // delete
  @Delete('/delete')
  deleteBooks(): string {
    return 'Book Deleted';
  }
}
