export class CreateCarDto {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
}

// puede ser tambien interface pero dto permite validaciones y transformaciones