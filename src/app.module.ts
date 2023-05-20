import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb+srv://firziawan20:Firzi26081106@enz.da7jszh.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
