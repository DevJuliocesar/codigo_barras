import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value) {
    if (value) {
      const words = value.split(' ');

      value = words.map((word) => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
    }
    return value;
  }
}
