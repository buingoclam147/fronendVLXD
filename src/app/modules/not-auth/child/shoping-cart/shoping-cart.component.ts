import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/core/share/model/cart-item.model';
import { IProduct } from 'src/app/core/share/model/product.model';
import { AuthService } from 'src/app/core/share/service/auth.service';
import { InvoiceDetailService } from 'src/app/core/share/service/invoice-detail.service';
import { InvoiceService } from 'src/app/core/share/service/invoice.service';
import { CartStoreService } from 'src/app/core/share/stores/cart-store.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  total$ = this.cartStore.total$;
  cartItems$;
  constructor(
    private cartStore: CartStoreService,
    private notification: NzNotificationService,
    private auth: AuthService,
    private invoiceService: InvoiceService,
    private invoiceDetailService: InvoiceDetailService
  ) { }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  ngOnInit() {
    this.cartItems$ = this.cartStore.cartItems$;
  }
  addItem(value: number, cartItem: CartItem) {
    this.cartStore.addShopingCart(cartItem.product, value - cartItem.quantity);
  }
  onSolve(cartItems: CartItem[]) {
    if (cartItems.length === 0) {
      this.notification.create(
        'warning',
        'Giỏ hàng rỗng',
        'Bạn phải có sản phẩm trong giỏ mới có thể thanh toán',
        { nzDuration: 1000 }
      );
    }
    else {
      this.subscriptions.push(this.auth.currentUser$.subscribe(curentId => {
        if (curentId === '') {
          this.notification.create(
            'warning',
            'Chưa đăng nhập',
            'Bạn phải đăng nhập mới có thể thoanh toán sản phẩm',
            { nzDuration: 1000 }
          );
        }
        else {
          const dataInvoice = {
            code: 'CODE' + new Date().getTime(),
            customerId: curentId,
            createAt: new Date().getTime(),
            status: 'pending'
          };
          this.notification.create(
            'success',
            'Thành công!',
            'Đặt mua sản phẩm thành công, sản phẩm đang ở trạng thái chờ duyệt',
            { nzDuration: 1000 }
          );
          this.invoiceService.postOneInvoice(dataInvoice).subscribe(x => {
            cartItems.forEach(cartItem => {
              const product = {
                productId: cartItem.product._id,
                invoiceId: x._id,
                quantity: cartItem.quantity,
                totalCash: cartItem.product.price * cartItem.quantity
              };
              this.invoiceDetailService.postOneInvoiceDetail(product).subscribe();
              this.cartStore.reset();
            });
          });
        }
      }));
    }
  }
}
