import { Controller, Get, Param } from '@nestjs/common'
import { ProductService } from 'src/services/product/product.service'

@Controller('products')
export class ProductController {
  private readonly productService: ProductService
  constructor() {
    this.productService = new ProductService()
  }

  @Get()
  async getProducts() {
    return await this.productService.getAll()
  }

  @Get('/:id')
  async getASingleProduct(@Param('id') id: string) {
    return await this.productService.getById(id)
  }
}
