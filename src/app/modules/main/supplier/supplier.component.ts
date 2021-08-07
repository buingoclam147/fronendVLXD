import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { STATE } from 'src/app/core/const/enum';
import { StateConfig } from 'src/app/core/share/model/state-config.model';
import { Pagination, Table } from 'src/app/core/share/model/table.model';
import { SupplierService } from 'src/app/core/share/service/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  id = '';
  state = STATE.ADD;
  visible = false;
  formEverything: FormGroup;
  stateConfig: StateConfig[] = [
    new StateConfig('Tạo mới nhà cung cấp', 'Hủy', 'Tạo mới'),
    new StateConfig('Sửa nhà cung cấp', 'Hủy', 'Đồng Ý'),
    new StateConfig('Xem nhà cung cấp', 'Đóng', null),
  ];
  action = {
    create: 'Tạo mới thành công',
    update: 'cập nhật dữ liệu thành công',
    delete: 'xóa dữ liệu thành công',
  };
  table: Table = new Table(new Pagination(5, 0), 0, [], { searchName: '', address: '' });
  createMessage(type: string, contentMessage: string): void {
    this.message.create(type, `${contentMessage}`);
  }
  constructor(
    private supplierService: SupplierService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.formEverything = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10)]],
    });
    this.search();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  // table
  search(): void {
    this.table.isLoading = true;
    this.subscriptions.push(this.supplierService.getSupplier(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.table.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        return i;
      });
      this.table.isLoading = false;
    }));
  }
  deleteSearch(item): void {
    item === 'name' ? this.table.filter.searchName = '' : this.table.filter.address = '';
    this.search();

  }
  onCancel(): void {
    this.formEverything.reset();
    this.visible = false;
  }
  handleOk(): void {
    switch (this.state) {
      case STATE.ADD:
        {
          const data = {
            name: this.formEverything.value.name,
            address: this.formEverything.value.address,
            phoneNumber: this.formEverything.value.phoneNumber
          };
          this.subscriptions.push(this.supplierService.postOneSupplier(data).subscribe(item => {
            this.formEverything.reset();
            this.search();
            this.visible = false;
            this.createMessage('success', this.action.create);
          }));
          break;
        }
      case STATE.UPDATE:
        {
          const data = { ...this.formEverything.value };
          this.subscriptions.push(this.supplierService.updateSupplier(this.id, data).subscribe(_ => {
            this.formEverything.reset();
            this.search();
            this.visible = false;
            this.createMessage('success', this.action.update);
            this.id = '';
          }));
          break;
        }
      default:
        break;
    }
  }
  showModal(state: STATE, id?: any): void {
    this.id = id;
    this.state = state;
    switch (this.state) {
      case STATE.ADD:
        {
          this.visible = true;
          break;
        }
      case STATE.UPDATE:
      case STATE.VIEW:
        {
          this.subscriptions.push(this.supplierService.getOneSupplier(id).subscribe(item => {
            this.formEverything.patchValue({
              name: item.name,
              address: item.address,
              phoneNumber: item.phoneNumber
            });
            this.visible = true;
          }));
          break;
        }
      default:
        break;
    }
  }
  pageIndexChange(value): void {
    this.table.pageIndexChange(value);
    this.search();
  }
  pageSizeChange(value): void {
    this.table.pageSizeChange(value);
    this.search();
  }
  deleteOneCategory(id): void {
    this.subscriptions.push(this.supplierService.deleteOneSupplier(id).subscribe(_ => {
      this.search();
      this.createMessage('success', this.action.delete);
    }));
  }
  isShowMinus(): boolean {
    return !!this.table.data.find(x => x.checked === true);
  }
  deleteMany(): void {
    const data = [];
    this.table.data.forEach(item => {
      return item.checked === true ? data.push(item._id) : data;
    });
    this.subscriptions.push(this.supplierService.deleteSupplier(data).subscribe(item => {
      this.search();
      this.createMessage('success', this.action.delete);
    }));
  }
}
