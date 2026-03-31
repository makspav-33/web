import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class ContactFormDto {
  @IsNotEmpty({ message: "Ім'я є обов'язковим" })
  @IsString()
  @MinLength(2, { message: "Ім'я має містити мінімум 2 символи" })
  name: string;

  @IsNotEmpty({ message: `Email є обов'язковим` })
  @IsEmail({}, { message: 'Некоректний формат email' })
  email: string;

  @IsNotEmpty({ message: `Тема є обов'язковою` })
  @IsString()
  @MinLength(3, { message: `Тема має містити мінімум 3 символи` })
  @MaxLength(100)
  subject: string;

  @IsNotEmpty({ message: `Повідомлення є обов'язковим` })
  @IsString()
  @MinLength(10, { message: 'Повідомлення має містити мінімум 10 символів' })
  message: string;
}