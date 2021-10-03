import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== 'string') {
      throw new BadRequestException(`"${value}" is not a string`)
    }
    return value
  }
}
