/* eslint-disable @typescript-eslint/no-unsafe-call */
/* import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
 */

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {
    @IsString()
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    name: string;
}