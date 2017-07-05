import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  // value -> value in html
  // args -> type or specicific value that determine this pipe
  // args? -> "?" mean not care to have or not .. to avoid bug
  // example : {{item.publishedAt | date: 'dd/MM/yyyy'}}
  transform(value: any, args?: any): any {
    return value + '555';
  }

}
