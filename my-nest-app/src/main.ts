import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Додаємо імпорт

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Вмикаємо глобальну валідацію
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();