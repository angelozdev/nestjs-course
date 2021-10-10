import { Module } from '@nestjs/common'

// modules
import { ProductsModule } from '../products/products.module'

// controllers
import { UsersController } from './users.controller'

// services
import { UsersService } from './users.service'

@Module({
  imports: [ProductsModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
