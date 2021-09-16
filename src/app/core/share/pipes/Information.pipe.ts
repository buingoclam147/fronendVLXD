import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Information'
})
export class InformationPipe implements PipeTransform {

  transform(value: any, type?: string, user?: any): any {
    return user.find(x => value === x._id)[type];
  }

}
