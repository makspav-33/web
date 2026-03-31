import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactFormDto } from './contact.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('contact')
  async submitContactForm(@Body() contactData: ContactFormDto) {
    return this.appService.sendContactEmail(contactData);
  }
}