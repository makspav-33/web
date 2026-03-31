import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactFormDto } from './contact.dto';

@Controller('api') // Базовий шлях для цього контролера
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('contact') // Повний шлях буде: POST /api/contact
  async submitContactForm(@Body() contactData: ContactFormDto) {
    // Дані вже провалідовані завдяки ValidationPipe та ContactFormDto
    return this.appService.sendContactEmail(contactData);
  }
}