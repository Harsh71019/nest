import { Controller, Get, Delete, Post, Patch } from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {}

  @Get()
  findOne() {}

  @Post()
  create() {}

  @Patch()
  update() {}

  @Delete()
  remove() {}
}
