import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { STATE } from 'src/app/core/const/enum';
import { StateConfig } from 'src/app/core/share/model/state-config.model';
import { Pagination, Table } from 'src/app/core/share/model/table.model';
import { CategoryService } from 'src/app/core/share/service/category.service';
import { ProductService } from 'src/app/core/share/service/product.service';
import { SupplierService } from 'src/app/core/share/service/supplier.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  maxPrice = 500;
  defaultFileList: NzUploadFile[] = [];
  dataCategory = [];
  dataSupplier = [];
  marks = {
    0: '0đ',
    50: '50.000đ',
    200: '200.000đ',
    500: {
      style: {
        color: '#f50'
      },
      label: '<strong>500.000đ</strong>'
    }
  };
  typeForm = '';
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
  table: Table = new Table(new Pagination(5, 0), 0, [],
    {
      categoryId: '',
      supplierId: '',
      name: '',
      price: [0, this.maxPrice]
    });

  constructor(
    private supplierService: SupplierService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) { }

  createMessage(type: string, contentMessage: string): void {
    this.message.create(type, `${contentMessage}`);
  }
  ngOnInit(): void {
    this.formEverything = this.fb.group({
      categoryId: ['', Validators.required],
      supplierId: ['', Validators.required],
      name: ['', Validators.required],
      price: '',
      unit: '',
      quantity: '',
      photos: [],
      note: ''
    });
    this.getFilterData();
    this.search();
  }
  getFilterData(): void {
    this.categoryService.getCategory(new Pagination(99, 0), '').subscribe(data => {
      this.dataCategory = data.data;
    });
    this.supplierService.getSupplier(new Pagination(99, 0), '').subscribe(data => {
      this.dataSupplier = data.data;
    });
  }

  // table
  search(): void {
    this.table.isLoading = true;
    this.productService.getProduct(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.table.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        return i;
      });
      this.typeForm = '';
      console.log(this.typeForm);
      this.table.isLoading = false;
    });
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
            ...this.formEverything.value,
            photos: this.defaultFileList.map(x => environment.localhost + '/' + x.response.filename)
          };
          this.productService.postOneProduct(data).subscribe(_ => {
            this.formEverything.reset();
            this.visible = false;
            this.createMessage('success', this.action.create);
            this.search();
          });
          break;
        }
      case STATE.UPDATE:
        {
          const data = { ...this.formEverything.value };
          this.productService.updateProduct(this.id, data).subscribe(_ => {
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
  showModal(state: STATE, id?: any): any {
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
          this.productService.getOneProduct(id).subscribe(item => {
            this.formEverything.patchValue({
              name: item.name,
              categoryId: item.categoryId,
              supplierId: item.supplierId,
              price: item.price,
              unit: item.unit,
              origin: item.origin,
              quantity: item.quantity,
              photos: item.photos,
              note: item.note
            });
            this.visible = true;
            this.typeForm = 'update';
          });
          break;
        }
      case STATE.VIEW:
        {
          this.productService.getOneProduct(id).subscribe(item => {
            this.formEverything.patchValue({
              name: item.name,
              categoryId: item.categoryId,
              supplierId: item.supplierId,
              price: item.price,
              unit: item.unit,
              origin: item.origin,
              quantity: item.quantity,
              photos: item.photos,
              note: item.note
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
  isShowMinus(): boolean {
    return !!this.table.data.find(x => x.checked === true);
  }
  pageIndexChange(value): void {
    this.table.pageIndexChange(value);
    this.search();
  }
  pageSizeChange(value): void {
    this.table.pageSizeChange(value);
    this.search();
  }
  deleteSearch(): void {
    this.table.filter.searchName = '';
  }
  deleteOneCategory(id): void {
    this.productService.deleteOneProduct(id).subscribe(_ => {
      this.search();
      this.createMessage('success', this.action.delete);
    });
  }
  deleteImg(nameImg): void {
    this.formEverything.value.photos = this.formEverything.value.photos.filter(item => item !== nameImg);
    console.log(this.formEverything.value.photos);
  }
}
