/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString } from "class-validator";

export class CreateCarDto {
    @IsString({
        message: 'Brand must be a string',
    })
    readonly brand: string;

    @IsString({
        message: 'Model must be a string',
    })
    readonly model: string;

    @IsNumber({}, {
        message: 'Year must be a number',
    })
    readonly year: number;
}

// puede ser tambien interface pero dto permite validaciones y transformaciones