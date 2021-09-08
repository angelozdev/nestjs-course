import { Module } from '@nestjs/common'

// services
import { AppService } from './app.service'

// controllers
import { AppController } from './app.controller'
import { PostsController } from './controllers/posts.controller'
import { UsersController } from './controllers/users.controller'

@Module({
  imports: [],
  controllers: [AppController, PostsController, UsersController],
  providers: [AppService]
})
export class AppModule {}
