import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

// controllers
import { ProductsController } from './products.controller'

// services
import { ProductsService } from './products.service'

@Module({
  imports: [HttpModule],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}
