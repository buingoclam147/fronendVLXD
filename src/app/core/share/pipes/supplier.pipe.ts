import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'supplier'
})
export class SupplierPipe implements PipeTransform {

  transform(value: any, suppliers?: any): any {
    return suppliers.find(x =>  value === x._id ).name;
  }

}
