import { Module } from '@nestjs/common'

// services
import { AppService } from './app.service'
import { ProductService } from './services/product/product.service'

// controllers
import { AppController } from './app.controller'
import { PostsController } from './controllers/posts/posts.controller'
import { UsersController } from './controllers/users/users.controller'
import { HttpCatsController } from './controllers/http-cats/http-cats.controller'
import { ProductController } from './controllers/product/product.controller'

@Module({
  imports: [],
  controllers: [
    AppController,
    PostsController,
    UsersController,
    HttpCatsController,
    ProductController
  ],
  providers: [AppService, ProductService]
})
export class AppModule {}
