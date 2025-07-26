import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // ✅ IMPORTADO
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ ADICIONADO
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
