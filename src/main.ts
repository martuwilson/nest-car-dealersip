import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo permite propiedades que estén en el DTO
      forbidNonWhitelisted: true, // Lanzar un error si hay propiedades no permitidas
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void main();
