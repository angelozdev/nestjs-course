import { Type } from 'class-transformer'
import {
  IsDefined,
  IsEmail,
  IsNotEmptyObject,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator'
import {
  Address as IAddress,
  Company as ICompany,
  Geo as IGeo,
  User
} from '../interfaces/user.interface'

class Geo implements IGeo {
  @IsNumberString()
  lat: string

  @IsNumberString()
  lng: string
}

class Address implements IAddress {
  @IsString()
  city: string

  @IsString()
  street: string

  @IsString()
  suite: string

  @IsString()
  zipcode: string

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Geo)
  geo: Geo
}

export class CreateUserDto implements Omit<User, 'id'> {
  @IsString()
  name: string

  @IsString()
  username: string

  @IsEmail()
  email: string

  @ValidateNested()
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  @Type(() => Address)
  address: Address

  @IsString()
  website: string

  @IsString()
  phone: string

  @IsOptional()
  @IsObject()
  company!: ICompany
}
