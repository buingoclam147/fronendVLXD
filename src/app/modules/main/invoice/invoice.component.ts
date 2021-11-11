import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { Pagination, Table } from 'src/app/core/share/model/table.model';
import { InvoiceService } from 'src/app/core/share/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, OnDestroy {
  idMain;
  status = ['pending', 'beingProcessed', 'complete', 'destroy'];
  subscriptions: Subscription[] = [];
  table: Table = new Table(new Pagination(5, 0), 0, [], { code: '' });
  constructor(
    private invoiceService: InvoiceService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.search();
    this.idMain = localStorage.getItem('employeId');
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  pageIndexChange(value): void {
    this.table.pageIndexChange(value);
    this.search();
  }
  pageSizeChange(value): void {
    this.table.pageSizeChange(value);
    this.search();
  }
  search(): void {
    this.table.isLoading = true;
    this.subscriptions.push(this.invoiceService.getInvoice(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.table.isCheckedAll = false;
      this.table.data = x.data.map((i: any) => {
        i.checked = false;
        return i;
      });
      this.table.isLoading = false;
    }));
  }
  deleteSearch(): void {
    this.table.filter.code = '';
    this.search();
  }
  statusChange(valueStt, invoice) {
    const data = {
      _id: invoice._id,
      code: invoice.code,
      createAt: invoice.createAt,
      customerId: invoice.customerId,
      status: valueStt,
      employeId: this.idMain
    };
    this.subscriptions.push(this.invoiceService.updateInvoice(invoice._id, data).subscribe(_ => {
      this.search();
    }));
  }
  showInvoice(i) {
    this.router.navigate([ROUTER_CONST.MAIN.INVOICE.DETAIL, i]);
  }
}
