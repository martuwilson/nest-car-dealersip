/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({
        message: 'Brand must be a string',
    })
    @MinLength(3, {
        message: 'Brand must be at least 3 characters long',
    })
    readonly brand: string;

    @IsString({
        message: 'Model must be a string',
    })
    @MinLength(3, {
        message: 'Model must be at least 3 characters long',
    })
    readonly model: string;

    @IsNumber({}, {
        message: 'Year must be a number',
    })
    readonly year: number;
}

// puede ser tambien interface pero dto permite validaciones y transformaciones