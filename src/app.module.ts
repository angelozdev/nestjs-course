import { Module } from '@nestjs/common'

// services
import { AppService } from './app.service'
import { ProductsService } from './products/products.service'

// controllers
import { AppController } from './app.controller'
import { ProductsController } from './products/products.controller'

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService]
})
export class AppModule {}
