import { Module } from '@nestjs/common'

// services
import { AppService } from './app.service'

// controllers
import { AppController } from './app.controller'

// Modules
import { ProductsModule } from './models/products/products.module'

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
