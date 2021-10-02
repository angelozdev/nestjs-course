import { Body, Controller, Get, Param, Post, Query, Put } from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto'
import { TSort } from './interfaces'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts(
    @Query('sort') sort: TSort = 'asc',
    @Query('limit') limit = '10'
  ) {
    return await this.productsService.getAll({ sort, limit })
  }

  @Get('/category/:category')
  async getProductsByCategory(
    @Param('category') category: string,
    @Query('sort') sort: TSort = 'asc',
    @Query('limit') limit = '10'
  ) {
    return await this.productsService.getByCategory(category, { sort, limit })
  }

  @Get('/:id')
  async getASingleProduct(@Param('id') id: string) {
    return await this.productsService.getById(id)
  }

  @Post()
  async createProduct(@Body() product: CreateProductDto) {
    if (!product || typeof product !== 'object') {
      throw new Error('Missing product')
    }

    const newProduct: CreateProductDto = {
      category: undefined,
      description: undefined,
      image: undefined,
      price: undefined,
      title: undefined,
      ...product
    }

    Object.entries(newProduct).forEach(([key, value]) => {
      if (!value) {
        throw new Error(`Missing ${key} of product`)
      }
    })

    return await this.productsService.create(product)
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: CreateProductDto
  ) {
    return product
  }
}
