import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://kaylane-guarino.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-token'],
  });

  await app.listen(process.env.PORT || 3001);
}

bootstrap();
