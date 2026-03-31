"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactFormDto = void 0;
const class_validator_1 = require("class-validator");
class ContactFormDto {
    name;
    email;
    subject;
    message;
}
exports.ContactFormDto = ContactFormDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Ім'я є обов'язковим" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: "Ім'я має містити мінімум 2 символи" }),
    __metadata("design:type", String)
], ContactFormDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Email є обов'язковим` }),
    (0, class_validator_1.IsEmail)({}, { message: 'Некоректний формат email' }),
    __metadata("design:type", String)
], ContactFormDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Тема є обов'язковою` }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3, { message: `Тема має містити мінімум 3 символи` }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], ContactFormDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Повідомлення є обов'язковим` }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10, { message: 'Повідомлення має містити мінімум 10 символів' }),
    __metadata("design:type", String)
], ContactFormDto.prototype, "message", void 0);
//# sourceMappingURL=contact.dto.js.map