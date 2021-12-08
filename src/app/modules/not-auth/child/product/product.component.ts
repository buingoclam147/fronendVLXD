import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { InputNumberComponent } from 'src/app/core/share/components/input-number/input-number.component';
import { IProduct } from 'src/app/core/share/model/product.model';
import { Pagination, Table } from 'src/app/core/share/model/table.model';
import { CartService } from 'src/app/core/share/service/cart.service';
import { CategoryService } from 'src/app/core/share/service/category.service';
import { ProductService } from 'src/app/core/share/service/product.service';
import { SupplierService } from 'src/app/core/share/service/supplier.service';
import { CartStoreService } from 'src/app/core/share/stores/cart-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  @ViewChild('carosel') onCarousel;
  @ViewChild(InputNumberComponent) InputNumber;
  effect = 'scrollx';
  onProduct: IProduct;
  isVisible = false;
  valueSelect = '12';
  subscriptions: Subscription[] = [];
  maxPrice = 500000;
  typeForm = '';
  dataCategory = [];
  dataSupplier = [];
  marks = {
    0: '0',
    70000: '70.000đ',
    200000: '200.000đ',
    500000: {
      style: {
        color: '#e9212e'
      },
      label: '<strong>500.000đ</strong>'
    }
  };
  table: Table = new Table(new Pagination(+this.valueSelect, 0), 0, [],
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
    private route: ActivatedRoute,
    private cartStore: CartStoreService,
    private notification: NzNotificationService
  ) { }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => {

      this.table.filter.categoryId = x.categoryId;
      if (x.name) {
        this.table.filter.name = x.name;
      }
      this.search();
    });
    this.getFilterData();
  }
  search(): void {
    this.table.isLoading = true;
    this.subscriptions.push(this.productService.getProduct(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.table.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        return i;
      });
      this.typeForm = '';
      this.table.isLoading = false;
    }));
  }
  formatFn = (value: number): string => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  getFilterData(): void {
    this.subscriptions.push(this.categoryService.getCategory(new Pagination(99, 0), '').subscribe(data => {
      this.dataCategory = data.data;
    }));
    this.subscriptions.push(this.supplierService.getSupplier(new Pagination(99, 0), '').subscribe(data => {
      this.dataSupplier = data.data;
    }));
  }
  onChangeModel(): void {
    this.table.pagination = new Pagination(+this.valueSelect, 0);
    this.search();
  }
  deleteSearch(): void {
    this.table.filter.name = '';
  }
  showModal(id): void {
    this.onProduct = this.table.data.find(product => {
      return product._id === id;
    });
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  onTab(index): void {
    this.onCarousel.goTo(index);
  }
  addShopingCart(product: IProduct, typeStatus): void {
    this.cartStore.addShopingCart(product, this.InputNumber.num);
    this.notification.create(
      typeStatus,
      'Thành công',
      'Thêm sản phẩm vào giỏ hàng thành công!',
      { nzDuration: 1000 }
    );
    this.isVisible = false;
  }
}
