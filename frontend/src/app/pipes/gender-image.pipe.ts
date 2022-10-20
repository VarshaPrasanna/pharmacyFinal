import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderImage'
})
export class GenderImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
