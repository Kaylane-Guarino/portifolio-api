import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('email')
export class AppController {
  constructor(private readonly emailService: AppService) {}

  @Post('send')
  async sendEmail(
    @Body()
    body: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
  ) {
    await this.emailService.sendEmail(body);
    return { message: 'E-mail enviado com sucesso.' };
  }
}
