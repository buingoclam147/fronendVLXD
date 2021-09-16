import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Pagination } from 'src/app/core/share/model/table.model';
import { AuthService } from 'src/app/core/share/service/auth.service';
import { CustomerService } from 'src/app/core/share/service/customer.service';
import { EmployeService } from 'src/app/core/share/service/employe.service';
import { InvoiceDetailService } from 'src/app/core/share/service/invoice-detail.service';
import { InvoiceService } from 'src/app/core/share/service/invoice.service';
import { ProductService } from 'src/app/core/share/service/product.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {
  isVisible = false;
  dataID = [];
  dataInvoice;
  invoices$;
  currentUser;
  invoiceDetail$;
  product$;
  employe$;
  constructor(
    private auth: AuthService,
    private customer: CustomerService,
    private invoiceService: InvoiceService,
    private invoiceDetailService: InvoiceDetailService,
    private productService: ProductService,
    private employeService: EmployeService
  ) { }

  ngOnInit() {
    this.auth.currentUser$.subscribe(idUser => {
      this.currentUser = this.customer.getOneCustomer(idUser);
      this.invoices$ = this.invoiceService.getInvoice(new Pagination(99, 0), { customerId: idUser, code: '' });
      this.product$ = this.productService.getProduct(new Pagination(99, 0),
        {
          price: [0, 9999999],
          name: '',
          categoryId: '',
          supplierId: ''
        });
    });
  }
  logout(): void {
    this.auth.logout();
  }
  onInvoice(invoiceId) {
    this.isVisible = true;
    this.invoiceDetail$ = this.invoiceDetailService.getInvoiceDetail(new Pagination(99, 0), { invoiceId: invoiceId._id })
      .pipe(map(invoiceDetail => {
        let sumPrice = 0;
        invoiceDetail.data.forEach(item => {
          sumPrice = sumPrice + item.totalCash;
        });
        return { ...invoiceDetail, sumPrice };
      }));
    this.employe$ = this.employeService.getOneEmploye(invoiceId.employeId);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
}
