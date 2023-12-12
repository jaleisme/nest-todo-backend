import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Task } from './tasks/task/task.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot(dbConfig),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService: ConfigService) => ({
          type:'mysql',
          host:'localhost',
          port:3306,
          username:'root',
          password:'',
          database:'nest-todo',
          schema:'public',
          synchronize: true,
          logging: true,
          entities:[Task],
      }),
      inject: [ConfigService],
    }),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
