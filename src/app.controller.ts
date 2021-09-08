import { Controller, Get, Param, Query } from '@nestjs/common'
import axios from 'axios'
import { AppService } from './app.service'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' }
})

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/posts')
  async getAllPosts(
    @Query('limit') limit = 20,
    @Query('skip') skip = 0,
    @Query('title') title: string,
    @Query('userId') userId: string
  ): Promise<Post[]> {
    try {
      const { data } = await axiosInstance.get<Post[]>('/posts', {
        params: { userId, title }
      })

      const start = Number(skip)
      const end = start + Number(limit)

      return data.slice(start, end)
    } catch (error) {
      return []
    }
  }

  @Get('/posts/:id')
  async getPostById(@Param('id') postId: string): Promise<Post> {
    const { data } = await axiosInstance.get<Post[]>('/posts', {
      params: { id: postId }
    })

    const [firstPost] = data
    return firstPost
  }
}
