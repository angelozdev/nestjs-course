import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'

import { User } from './interfaces/user.interface'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/')
  async getUsers(): Promise<User[]> {
    return await this.usersService.getAll()
  }

  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.getById(id)
  }

  @Post('/')
  async create(@Body() newUser: CreateUserDto) {
    console.log(newUser)

    return await this.usersService.create(newUser)
  }
}
