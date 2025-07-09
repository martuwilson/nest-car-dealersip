/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()

    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;

    @IsOptional()
    @IsNumber()
    readonly year?: number;
}