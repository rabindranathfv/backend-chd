import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import GeneralMiddleware from './middleware/general.middleware';
import { PetsModule } from './pets/pets.module';

import { ConfigModule, ConfigService } from '@nestjs/config';

const DB_NAME = `MongoNestAPI`;
const DB_PORT = 27017;
const DB_HOST = 'localhost';

@Module({
  imports: [
    // MongooseModule.forRoot(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}.local`,
      isGlobal: true,
    }),
    UsersModule,
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GeneralMiddleware).forRoutes(
      {
        path: `users`,
        method: RequestMethod.ALL,
      },
      { path: 'pets', method: RequestMethod.GET },
    );
  }
}
