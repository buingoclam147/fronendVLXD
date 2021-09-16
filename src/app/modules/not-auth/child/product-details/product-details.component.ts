import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InputNumberComponent } from 'src/app/core/share/components/input-number/input-number.component';
import { IProduct } from 'src/app/core/share/model/product.model';
import { Pagination } from 'src/app/core/share/model/table.model';
import { CategoryService } from 'src/app/core/share/service/category.service';
import { ProductService } from 'src/app/core/share/service/product.service';
import { SupplierService } from 'src/app/core/share/service/supplier.service';
import { CartStoreService } from 'src/app/core/share/stores/cart-store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('carosel') onCarousel;
  @ViewChild('caroselCmt') onCarouselCmt;
  @ViewChild(InputNumberComponent) InputNumber;
  effect = 'scrollx';
  dataCategory;
  dataSupplier;
  idProduct;
  dataDetails$: Observable<IProduct>;
  nameDescription = ['Miêu tả', 'Thông tin chi tiết', ' Nhận xét(1)'];
  indexTab = 0;
  constructor(
    private supplierService: SupplierService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartStore: CartStoreService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idProduct = params.get('id');
      this.dataDetails$ = this.productService.getOneProduct(this.idProduct);
    });
    this.dataCategory = this.categoryService.getCategory(new Pagination(99, 0), '');
    this.dataSupplier = this.supplierService.getSupplier(new Pagination(99, 0), '');
  }
  onTab(index): void {
    this.onCarousel.goTo(index);
  }
  onTabCmt(index): void {
    this.indexTab = Number(index);
    this.onCarouselCmt.goTo(index);
  }
  addShopingCart(product: IProduct, typeStatus): void {
    this.cartStore.addShopingCart(product, this.InputNumber.num);
    this.notification.create(
      typeStatus,
      'Thành công',
      'Thêm sản phẩm vào giỏ hàng thành công!',
      { nzDuration: 1000 }
    );
  }
}
