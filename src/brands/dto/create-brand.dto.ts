/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {

    @IsString()
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    name: string;

}
