import { Controller, Get, Param } from '@nestjs/common'

@Controller('http-cats')
export class HttpCatsController {
  @Get('/:status')
  async getStatus(@Param('status') status: string) {
    return `<img src="https://http.cat/${status}" alt="${status}" />`
  }
}
