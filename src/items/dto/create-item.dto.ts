export class CreateItemDto {
  readonly name: string;
  readonly description: string;
  readonly quantity: number;
}

export class UpdateItemDto {
  readonly name: string;
  readonly description: string;
  readonly quantity: number;
}
