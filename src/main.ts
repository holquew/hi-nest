import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 하나의 모듈에서 앱을 생성
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // 유저들이 보낸 프로퍼티를 원하는 실제 타입으로 바꿔준다. id: string -> number
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
