import { PartialType } from '@nestjs/mapped-types'
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Length,
  IsPositive
} from 'class-validator'
export class CreateProductDto {
  @Length(5, 50)
  @IsString()
  @IsNotEmpty()
  readonly title: string

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly price: number

  @IsNotEmpty()
  @IsString()
  readonly description: string

  @IsNotEmpty()
  @IsString()
  readonly category: string

  @IsNotEmpty()
  @IsUrl()
  readonly image: string
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
