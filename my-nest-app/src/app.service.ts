import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Resend } from 'resend';
import { ContactFormDto } from './contact.dto';

@Injectable()
export class AppService {
  private resend = new Resend(process.env.RESEND_API_KEY); 

  async sendContactEmail(data: ContactFormDto) {
    try {
      const response = await this.resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'makspavlovskiy925@gmail.com',
        subject: `Нове звернення з сайту: ${data.subject}`,
        html: `
          <h3>Нове повідомлення з форми контактів</h3>
          <p><strong>Ім'я:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Тема:</strong> ${data.subject}</p>
          <p><strong>Повідомлення:</strong><br/>${data.message}</p>
        `,
      });

      return { success: true, message: 'Лист успішно відправлено!', id: response.data?.id };
    } catch (error) {
      throw new HttpException('Помилка при відправці листа', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}