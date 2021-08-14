import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { STATE } from 'src/app/core/const/enum';
import { StateConfig } from 'src/app/core/share/model/state-config.model';
import { Pagination, Table } from 'src/app/core/share/model/table.model';
import { CustomerService } from 'src/app/core/share/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  id = '';
  state = STATE.ADD;
  visible = false;
  formEverything: FormGroup;
  stateConfig: StateConfig[] = [
    new StateConfig('Tạo mới người dùng', 'Hủy', 'Tạo mới'),
    new StateConfig('Sửa thông tin người dùng', 'Hủy', 'Đồng Ý'),
    new StateConfig('Xem chi tiết người dùng', 'Đóng', null),
  ];
  action = {
    create: 'Tạo mới thành công',
    update: 'cập nhật dữ liệu thành công',
    delete: 'xóa dữ liệu thành công',
  };
  typeForm = '';
  table: Table = new Table(new Pagination(5, 0), 0, [], { searchName: '', address: '' });
  createMessage(type: string, contentMessage: string): void {
    this.message.create(type, `${contentMessage}`);
  }
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.formEverything = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: '',
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10)]],
      sex: null,
      note: '',
      dateOfBirth: null,
    });
    this.search();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  // table
  search(): void {
    this.table.isLoading = true;
    this.subscriptions.push(this.customerService.getCustomer(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.table.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        this.typeForm = '';
        return i;
      });
      this.table.isLoading = false;
    }));
  }
  deleteSearch(item): void {
    item === 'fullName' ? this.table.filter.fullName = '' : this.table.filter.address = '';
  }
  onCancel(): void {
    this.formEverything.reset();
    this.visible = false;
    this.typeForm = '';
  }
  handleOk(): void {
    switch (this.state) {
      case STATE.ADD:
        {
          const data = {
            ...this.formEverything.value,
            sex: this.formEverything.value.sex === null ? true : this.formEverything.value.sex
          };
          this.subscriptions.push(this.customerService.postOneCustomer(data).subscribe(_ => {
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
          this.subscriptions.push(this.customerService.updateCustomer(this.id, data).subscribe(_ => {
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
    this.formEverything.enable();
    this.id = id;
    this.state = state;
    switch (this.state) {
      case STATE.ADD:
        {
          this.typeForm = 'add';
          this.visible = true;
          break;
        }
      case STATE.UPDATE:
        {
          this.subscriptions.push(this.customerService.getOneCustomer(id).subscribe(item => {
            this.formEverything.patchValue({
              ...item,
            });
            this.visible = true;
            this.typeForm = 'update';
          }));
          break;
        }
      case STATE.VIEW:
        {
          this.subscriptions.push(this.customerService.getOneCustomer(id).subscribe(item => {
            this.formEverything.patchValue({
              ...item,
            });
            this.visible = true;
            this.typeForm = 'view';
            this.formEverything.disable();
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
  deleteOneCustomer(id): void {
    this.subscriptions.push(this.customerService.deleteOneCustomer(id).subscribe(_ => {
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
    this.subscriptions.push(this.customerService.deleteCustomer(data).subscribe(item => {
      this.search();
      this.createMessage('success', this.action.delete);
    }));
  }
}
