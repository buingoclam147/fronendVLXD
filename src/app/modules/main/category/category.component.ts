import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { STATE } from 'src/app/core/const/enum';
import { StateConfig } from 'src/app/core/share/model/state-config.model';
import { Pagination, Table } from 'src/app/core/share/model/table.model';
import { CategoryService } from 'src/app/core/share/service/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  id = '';
  state = STATE.ADD;
  visible = false;
  formEverything: FormGroup;
  stateConfig: StateConfig[] = [
    new StateConfig('Tạo mới loại hàng', 'Hủy', 'Tạo mới'),
    new StateConfig('Sửa loại hàng', 'Hủy', 'Đồng Ý'),
    new StateConfig('Xem loại hàng', 'Đóng', null),
  ];
  action = {
    create: 'Tạo mới thành công',
    update: 'cập nhật dữ liệu thành công',
    delete: 'xóa dữ liệu thành công',
  };
  table: Table = new Table(new Pagination(5, 0), 0, [], { searchName: '' });
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) { }
  createMessage(type: string, contentMessage: string): void {
    this.message.create(type, `${contentMessage}`);
  }
  ngOnInit(): void {
    this.formEverything = this.fb.group({
      name: ['', Validators.required],
      note: ''
    });
    this.search();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  // table
  search(): void {
    this.table.isLoading = true;
    this.subscriptions.push(this.categoryService.getCategory(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.table.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        return i;
      });
      this.table.isLoading = false;
    }));
  }

  pageIndexChange(value): void {
    this.table.pageIndexChange(value);
    this.search();
  }
  pageSizeChange(value): void {
    this.table.pageSizeChange(value);
    this.search();
  }



  // add update and delete

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
          this.subscriptions.push(this.categoryService.getOneCategory(id).subscribe(item => {
            this.formEverything.patchValue({ ...item });
            this.visible = true;
          }));
          break;
        }
      default:
        break;
    }
  }
  handleOk(): void {
    switch (this.state) {
      case STATE.ADD:
        {
          const data = { ...this.formEverything.value };
          this.subscriptions.push(this.categoryService.postOneCategory(data).subscribe(item => {
          }));
          this.formEverything.reset();
          this.search();
          this.visible = false;
          this.createMessage('success', this.action.create);
          break;
        }
      case STATE.UPDATE:
        {
          const data = { ...this.formEverything.value };
          this.subscriptions.push(this.categoryService.updateCategory(this.id, data).subscribe(_ => {
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

  onCancel(): void {
    this.formEverything.reset();
    this.visible = false;
  }
  deleteSearch(): void {
    this.table.filter.searchName = '';
    this.search();
  }
  deleteOneCategory(id): void {
    this.subscriptions.push(this.categoryService.deleteOneCategory(id).subscribe(_ => {
      this.search();
      this.createMessage('success', this.action.delete);
    }));
  }
  deleteMany(): void {
    const data = [];
    this.table.data.forEach(item => {
      return item.checked === true ? data.push(item._id) : data;
    });
    this.subscriptions.push(this.categoryService.deleteCategory(data).subscribe(item => {
      this.search();
      this.createMessage('success', this.action.delete);
    }));
    console.log(data);
  }

  isShowMinus(): boolean {
    return !!this.table.data.find(x => x.checked === true);
  }
}
