import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Product } from 'src/entities/product.entity'
import { ProductService } from 'src/services/product/product.service'

type NewProduct = Omit<Product, 'id' | 'rating'>

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

  @Post()
  async createProduct(@Body() product: NewProduct) {
    if (!product || typeof product !== 'object') {
      throw new Error('Missing product')
    }

    const newProduct: Partial<NewProduct> = {
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

    return await this.productService.create(product)
  }
}
