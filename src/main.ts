import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'))
  
  const configService = app.get(ConfigService)

  //cors seteado en /constants/cors.ts
  app.enableCors(CORS);
  
  console.log(configService.get('PORT'))
  
  //prefijo para que las url tengan /api/ antes de la ruta
  app.setGlobalPrefix('api')
  
  await app.listen(configService.get('PORT'));
  
  console.log(`Application running on: ${await app.getUrl()}`)
}
bootstrap();
