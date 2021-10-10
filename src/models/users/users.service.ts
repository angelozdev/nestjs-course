import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'
import { Order } from '../orders/interfaces/order.interface'
import { ProductsService } from '../products/products.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './interfaces/user.interface'

const _axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  headers: { 'Content-Type': 'application/json' }
})

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}
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

  async getOrders(userId: number): Promise<Order[]> {
    const user = await this.getById(userId)
    const products = await this.productsService.getAll({
      limit: Math.floor(Math.random() * 10)
    })

    return Promise.resolve([
      {
        user,
        products,
        id: Math.floor(Math.random() * 100000),
        created_at: new Date().toISOString()
      }
    ])
  }
}
