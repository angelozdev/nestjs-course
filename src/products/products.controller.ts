import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto'
import { TSort } from './interfaces'
import { UpdateProductDto } from './dto/create-product.dto'

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
  async getASingleProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.getById(id)
  }

  @Post()
  async createProduct(@Body() product: CreateProductDto) {
    return await this.productsService.create(product)
  }

  @Put('/:id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: UpdateProductDto
  ) {
    return await this.productsService.update(id, product)
  }
}
