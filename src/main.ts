import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //*seguridad enableCors
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
