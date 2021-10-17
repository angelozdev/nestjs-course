import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'

// services
import { AppService } from './app.service'

// controllers
import { AppController } from './app.controller'

// Modules
import { ProductsModule } from './models/products/products.module'
import { UsersModule } from './models/users/users.module'
import { OrdersModule } from './models/orders/orders.module'

@Module({
  imports: [ProductsModule, UsersModule, OrdersModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: Math.floor(Math.random() * 10)
    }
  ]
})
export class AppModule {}
