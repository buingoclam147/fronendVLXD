import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/share/service/category.service';
export enum STATE {
  ADD, UPDATE, VIEW
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  id = '';
  state = STATE.ADD;
  visible = false;
  formEverything: FormGroup;
  isCheckedAll = false;
  table = {
    pagination: {
      searchName: '',
      perPage: 5,
      page: 0
    },
    total: 0,
    data: [],
    isLoading: true
  };
  stay = [{
    title: 'Tạo mới loại hàng',
    cancelText: 'Hủy',
    okText: 'Tạo mới'
  },
  {
    title: 'Sửa loại hàng',
    cancelText: 'Hủy',
    okText: 'Đồng Ý'
  },
  {
    title: 'Xem loại hàng',
    cancelText: 'Đóng',
    okText: null
  }
  ];
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formEverything = this.fb.group({
      name: '',
      note: ''
    });
    this.getCategory();
  }

  getCategory(): void {
    this.table.isLoading = true;
    this.categoryService.getCategory(this.table.pagination).subscribe(x => {
      this.table.total = x.total;
      this.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        return i;
      });
      this.table.isLoading = false;
    });
  }
  deleteOneCategory(id): void {
    this.categoryService.deleteOneCategory(id).subscribe(_ => {
      this.getCategory();
    });
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
          this.categoryService.getOneCategory(id).subscribe(item => {
            this.formEverything.patchValue({
              name: item.name,
              note: item.note
            });
            this.visible = true;
          });
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
          const data = {
            name: this.formEverything.value.name,
            note: this.formEverything.value.note
          };
          this.categoryService.postOneCategory(data).subscribe(item => {
          });
          this.formEverything.reset();
          this.getCategory();
          this.visible = false;
          break;
        }
      case STATE.UPDATE:
        {
          const data = {
            name: this.formEverything.value.name,
            note: this.formEverything.value.note
          };
          console.log(this.formEverything);
          this.categoryService.updateCategory(this.id, data).subscribe(item => {
            console.log(item);
          });
          this.formEverything.reset();
          this.getCategory();
          this.visible = false;
          this.id = '';
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
  pageIndexChange(value): void {
    this.table.isLoading = true;
    this.table.pagination.page = value - 1;
    console.log(value);
    this.getCategory();
  }
  pageSizeChange(value): void {
    this.table.isLoading = true;
    this.table.pagination.perPage = value;
    this.getCategory();
  }
  search(): void {
    this.getCategory();
    console.log(this.table.pagination.searchName);
  }
  check(item): void {
    item.checked = !item.checked;
    this.isCheckedAll = this.table.data.filter(x => x.checked).length === this.table.data.length;
  }
  checkAll(): void {
    this.table.data = this.table.data.map(x => {
      x.checked = !this.isCheckedAll;
      return x;
    });
    this.isCheckedAll = !this.isCheckedAll;
  }
  deleteSearch(): void {
    this.table.pagination.searchName = '';
  }
}
