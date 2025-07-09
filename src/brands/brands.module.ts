import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService], // Exporto BrandsService para que pueda ser utilizado en otros módulos como el seed
})
export class BrandsModule {}
