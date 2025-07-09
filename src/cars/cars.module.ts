import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService], // Exporto CarsService para que pueda ser utilizado en otros módulos como el seed
})
export class CarsModule {}
