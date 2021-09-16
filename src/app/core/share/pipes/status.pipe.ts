import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  status = {
    pending : 'Đang chờ duyệt',
    beingProcessed : 'Đang giao hàng',
    complete : 'Đã giao hàng',
    destroy : 'Đã hủy đơn'
  };
  transform(value: any, args?: any): any {
    return this.status[value];
  }

}
