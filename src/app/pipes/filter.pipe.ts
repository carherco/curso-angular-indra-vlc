


import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: User[], searchString: string): User[] {
    console.log('Se ha ejecutado la pipe');
    const output = arr.filter( item => item.email.includes(searchString) );
    return output;
  }

}
