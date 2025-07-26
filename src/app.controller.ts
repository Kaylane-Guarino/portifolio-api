import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './api-key.guard';

@Controller('')
export class AppController {
  constructor(private readonly emailService: AppService) {}

  @Get()
  getHello(): string {
    return this.emailService.getHello(); // PÚBLICO
  }

  @UseGuards(ApiKeyGuard)
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
