import { Module } from '@nestjs/common'
import { HttpModule, HttpService } from '@nestjs/axios'

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
    },
    {
      provide: 'user',
      useFactory: (http: HttpService) => {
        const usersObservable = http.get('http://localhost:3000/users/1')
        usersObservable.subscribe(({ data }) => {
          console.log(data)
        })
      },
      inject: [HttpService]
    }
  ]
})
export class AppModule {}
