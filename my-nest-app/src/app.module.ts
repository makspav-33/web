import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Підключаємо модуль для роздачі статичних файлів
    ServeStaticModule.forRoot({
      // Вказуємо шлях до папки public
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
