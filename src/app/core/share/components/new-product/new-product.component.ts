import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../model/table.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  listNewProducts;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listNewProducts = this.productService.getProduct(new Pagination(3, 0), {});
  }

}
