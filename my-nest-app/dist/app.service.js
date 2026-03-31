"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const resend_1 = require("resend");
let AppService = class AppService {
    resend = new resend_1.Resend('re_4UK6TTtu_92B4xePg664e4QE5BoByGdbP');
    async sendContactEmail(data) {
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
        }
        catch (error) {
            throw new common_1.HttpException('Помилка при відправці листа', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map