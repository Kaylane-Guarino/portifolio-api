import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('EMAIL_HOST'),
      port: +this.configService.get('EMAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASS'),
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail({
    name,
    email,
    subject,
    message,
  }: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: this.configService.get('DESTINATION_EMAIL'),
      subject: subject,
      html: `
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
