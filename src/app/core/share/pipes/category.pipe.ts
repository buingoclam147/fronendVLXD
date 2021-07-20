import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(value: any, categories?: any): any {
    return categories.find(x =>  value === x._id ).name;
  }
}
