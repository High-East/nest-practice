import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 데코레이터 없는 property는 모두 제거함.
      forbidNonWhitelisted: true, // 데코레이터 없는 property를 요청으로 보내면 에러를 뱉음.
      transform: true, // 컨트롤러에서 변수를 받아서 넘겨줄 때 원하는 타입으로 변환해서 줌.
    }),
  );
  await app.listen(3000);
}
bootstrap();
