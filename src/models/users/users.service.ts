import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './interfaces/user.interface'

const _axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  headers: { 'Content-Type': 'application/json' }
})

@Injectable()
export class UsersService {
  async getAll(): Promise<User[]> {
    const { data: users } = await _axios.get<User[]>('/')
    return users
  }

  async getById(id: number): Promise<User> {
    const { data: user } = await _axios
      .get<User>(`/${id}`)
      .catch(() => ({ data: undefined }))

    if (!user) {
      throw new NotFoundException(`User ${id} was not found.`)
    }
    return user
  }

  async create(user: CreateUserDto): Promise<User> {
    const { data } = await _axios.post<User>('/', { data: user })
    return data
  }
}
