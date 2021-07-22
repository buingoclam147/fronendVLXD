import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { STATE } from 'src/app/core/const/enum';
import { StateConfig } from 'src/app/core/share/model/state-config.model';
import { Pagination, Table } from 'src/app/core/share/model/table.model';
import { CustomerService } from 'src/app/core/share/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

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
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: '',
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
      sex: '',
      note: ''
    });
    this.search();
  }


  // table
  search(): void {
    this.table.isLoading = true;
    this.customerService.getCustomer(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.table.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        this.typeForm = '';
        return i;
      });
      this.table.isLoading = false;
    });
  }
  deleteSearch(item): void {
    item === 'fullName' ? this.table.filter.fullName = '' : this.table.filter.address = '';
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
            ...this.formEverything.value
          };
          this.customerService.postOneCustomer(data).subscribe(item => {
            this.formEverything.reset();
            this.search();
            this.visible = false;
            this.createMessage('success', this.action.create);
          });
          break;
        }
      case STATE.UPDATE:
        {
          const data = { ...this.formEverything.value };
          this.customerService.updateCustomer(this.id, data).subscribe(_ => {
            this.formEverything.reset();
            this.search();
            this.visible = false;
            this.createMessage('success', this.action.update);
            this.id = '';
          });
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
          this.typeForm = 'add';
          this.visible = true;
          break;
        }
      case STATE.UPDATE:
        {
          this.customerService.getOneCustomer(id).subscribe(item => {
            this.formEverything.patchValue({
              ...item,
            });
            this.visible = true;
            this.typeForm = 'update';
          });
          break;
        }
      case STATE.VIEW:
        {
          this.customerService.getOneCustomer(id).subscribe(item => {
            this.formEverything.patchValue({
              ...item,
            });
            this.visible = true;
            this.typeForm = 'view';
          });
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
    this.customerService.deleteOneCustomer(id).subscribe(_ => {
      this.search();
      this.createMessage('success', this.action.delete);
    });
  }
  isShowMinus(): boolean {
    return !!this.table.data.find(x => x.checked === true);
  }
  deleteMany(): void {
    const data = [];
    this.table.data.forEach(item => {
      return item.checked === true ? data.push(item._id) : data;
    });
    this.customerService.deleteCustomer(data).subscribe(item => {
      this.search();
      this.createMessage('success', this.action.delete);
    });
    console.log(data);
  }
}
