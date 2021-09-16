import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Pagination } from 'src/app/core/share/model/table.model';
import { CustomerService } from 'src/app/core/share/service/customer.service';
import { EmployeService } from 'src/app/core/share/service/employe.service';
import { InvoiceDetailService } from 'src/app/core/share/service/invoice-detail.service';
import { InvoiceService } from 'src/app/core/share/service/invoice.service';
import { ProductService } from 'src/app/core/share/service/product.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  invoice$;
  employe$;
  idInvoice;
  customer$;
  invoiceDetail$;
  product$;
  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private employeService: EmployeService,
    private customerService: CustomerService,
    private productService: ProductService,
    private invoiceDetailService: InvoiceDetailService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idInvoice = params.get('id');
      const filter = { invoiceId: this.idInvoice };
      this.invoice$ = this.invoiceService.getOneInvoice(this.idInvoice);
      this.customer$ = this.customerService.getCustomer(new Pagination(99, 0), '');
      this.employe$ = this.employeService.getEmploye(new Pagination(99, 0), '');
      this.product$ = this.productService.getProduct(new Pagination(99, 0),
        {
          price: [0, 9999999],
          name: '',
          categoryId: '',
          supplierId: ''
        });
      this.invoiceDetail$ = this.invoiceDetailService.getInvoiceDetail(new Pagination(99, 0), filter).pipe(map(invoiceDetail => {
        let sumPrice = 0;
        invoiceDetail.data.forEach(item => {
          sumPrice = sumPrice + item.totalCash;
        });
        return { ...invoiceDetail, sumPrice };
      }));
    });
  }

}
