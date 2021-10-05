import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'

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
}
